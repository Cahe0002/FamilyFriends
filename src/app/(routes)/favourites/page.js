import Image from "next/image";
import { Suspense } from "react";
import FavouriteBtn from "@/app/components/FavouriteButton";
import Loading from "@/app/components/Loading";

const FavouritesPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <FetchFavourites />
      </Suspense>
    </>
  );
};
export default FavouritesPage;

async function FetchFavourites() {
  const res = await fetch("https://api.thedogapi.com/v1/favourites?limit=100", {
    headers: { "x-api-key": process.env.API_KEY },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Favourites fetch failed: ${res.status} ${await res.text()}`,
    );
  }

  const favourites = await res.json();

  if (favourites.length === 0) {
    return <p className="pt-5">You haven't saved any favourites yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {favourites.map((fav) => (
        <div className="breed-card mt-5" key={fav.id}>
          <div className="relative">
            <Image
              src={fav.image?.url ?? "/elton.jpg"}
              width={160}
              height={114}
              alt="Favourite dog"
              className="aspect-3/2 object-cover object-top rounded-2xl w-full"
            />

            <FavouriteBtn
              id={fav.image_id}
              favouriteId={fav.id}
              className="absolute top-2 right-2 size-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
