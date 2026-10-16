import { LuStar } from "react-icons/lu";

const FavouriteBtn = ({ className = "" }) => {
  return (
    <button
      type="button"
      aria-label="Add dog to favorites"
      className={`grid size-6 place-items-center rounded-full bg-white/25 backdrop-blur-lg cursor-pointer ${className}`}
    >
      <LuStar className=" size-3.5 fill-white stroke-0" />
    </button>
  );
};

export default FavouriteBtn;
