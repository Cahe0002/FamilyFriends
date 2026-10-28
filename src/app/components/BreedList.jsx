import Image from "next/image";
import FavouriteBtn from "./FavouriteButton";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./Loading";

const Breed = ({ searchParams }) => {
  return (
    <Suspense fallback={<Loading />}>
      <FetchBreed searchParams={searchParams} />
    </Suspense>
  );
};

const FetchBreed = async ({ searchParams }) => {
  const { query, id } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds/?limit=12";

  const headers = {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  };

  const [breedsResponse, favouriteResponse] = await Promise.all([
    fetch(url, headers),
    fetch("https://api.thedogapi.com/v1/favourites?limit=100", headers),
  ]);
  const [breeds, favourites] = await Promise.all([
    await breedsResponse.json(),
    await favouriteResponse.json(),
  ]);
  console.log(
    "favourites:",
    favourites.length,
    favourites.map((f) => f.image_id),
  );
  return (
    <>
      {breeds.map((breed) => {
        const imgId = breed.image?.id ?? breed.reference_image_id;
        const favourite = favourites.find((f) => f.image_id === imgId);

        return (
          <div className="breed-card" key={breed.id}>
            <div className="relative">
              <Link
                href={`/detailview/${breed.id}`}
                aria-label={`Go to ${breed.name}`}
              >
                <Image
                  loading="eager"
                  src={breed.image?.url ?? "/elton.jpg"}
                  width={160}
                  height={114}
                  alt={breed.name ? breed.name : "Image of dog"}
                  className="aspect-3/2 object-cover object-top rounded-2xl w-full"
                />
              </Link>
              <FavouriteBtn
                id={imgId}
                favouriteId={favourite?.id ?? null}
                className="absolute top-2 right-2 size-6"
              />
              <div className="px-3 pt-2 pb-3">
                <span className="text-base font-bold text-gray-800 pt-1.5">
                  {breed.name}
                </span>
                <p className="text-xs whitespace-pre-line text-gray-800/40">
                  {breed.origin}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Breed;
