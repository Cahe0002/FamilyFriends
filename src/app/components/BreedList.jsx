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
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds/?limit=12";

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breeds = await response.json();

  return (
    <>
      {breeds.map((breed) => (
        <div className="breed-card" key={breed.id}>
          <div className="relative">
            <Link
              href={`/detailview/${breed.id}`}
              aria-label={`Go to ${breed.name}`}
            >
              <Image
                loading="eager"
                src={breed.image.url}
                width={160}
                height={114}
                alt={breed.name ? breed.name : "Image of dog"}
                className="aspect-3/2 object-cover object-top rounded-2xl w-full"
              />
            </Link>
            <FavouriteBtn className="absolute top-2 right-2 size-6" />
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
      ))}
    </>
  );
};

export default Breed;
