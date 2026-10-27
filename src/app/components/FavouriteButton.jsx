"use client";
import { LuStar } from "react-icons/lu";
import { useState } from "react";

const FavouriteBtn = ({
  className = "size-6",
  size = "size-3.5",
}) => {
  const [isFavourite, setFavourite] = useState(false);
  return (
    <button
      onClick={() => setFavourite((favourite) => !favourite)}
      aria-pressed={isFavourite}
      type="button"
      aria-label="Add dog to favorites"
      className={`grid place-items-center rounded-full bg-white/25 backdrop-blur-lg cursor-pointer ${className}`}
    >
      <LuStar
        className={`${size} stroke-white ${isFavourite ? "fill-white" : "fill-none"}`}
      />
    </button>
  );
};

export default FavouriteBtn;
