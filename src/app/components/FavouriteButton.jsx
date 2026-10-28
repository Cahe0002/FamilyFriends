"use client";
import { useTransition } from "react";
import { LuStar } from "react-icons/lu";
import { toggleFavourite } from "../actions/actions";

const FavouriteBtn = ({
  className = "size-6",
  size = "size-3.5",
  id,
  favouriteId = null,
}) => {
  console.log("FavouriteBtn props:", { id, favouriteId });
  const [pending, startTransition] = useTransition();
  const isFavourite = favouriteId !== null;

  const handleClick = () => {
    startTransition(async () => {
      try {
        await toggleFavourite(id, favouriteId);
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={pending || !id}
      aria-pressed={isFavourite}
      type="button"
      aria-label={
        isFavourite ? "Remove dog from favourites" : "Add dog to favourites"
      }
      className={`grid place-items-center rounded-full bg-white/25 backdrop-blur-lg cursor-pointer ${className}`}
    >
      <LuStar
        className={`${size} stroke-white ${isFavourite ? "fill-white" : "fill-none"}`}
      />
    </button>
  );
};

export default FavouriteBtn;
