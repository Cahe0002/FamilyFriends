import { LuSearch } from "react-icons/lu";

const SearchIcon = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-circle rounded-full size-12">
        <LuSearch className="size-5 stroke-white stroke-3 -scale-x-100" />
      </div>
    </>
  );
};

export default SearchIcon;
