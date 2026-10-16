import { LuStar } from "react-icons/lu";

const FavouriteBtn = ({ className = "size-6", size = "size-3.5" }) => {
  return (
    <button
      type="button"
      aria-label="Add dog to favorites"
      className={`grid place-items-center rounded-full bg-white/25 backdrop-blur-lg cursor-pointer ${className}`}
    >
      <LuStar className={`${size} fill-white stroke-0`} />
    </button>
  );
};

export default FavouriteBtn;
