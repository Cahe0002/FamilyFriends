import Image from "next/image";
import FavouriteBtn from "./FavouriteButton";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Breed() {
  return (
    <Suspense fallback={<Loading />}>
      <FetchBreed />
    </Suspense>
  );
}

const FetchBreed = async () => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds?limit=6", {
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
                src={breed.image.url}
                width={160}
                height={114}
                alt={breed.name}
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
