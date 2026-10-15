import { LuSearch } from "react-icons/lu";

const SearchIcon = () => {
  return (
    <button
      type="submit"
      aria-label="Search"
      className="flex items-center justify-center bg-circle rounded-full size-12 shrink-0"
    >
      <LuSearch className="size-5 stroke-white stroke-3 -scale-x-100" />
    </button>
  );
};

export default SearchIcon;
