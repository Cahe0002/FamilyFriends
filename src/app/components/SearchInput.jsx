import SearchIcon from "./SearchIcon";

const SearchInput = () => {
  return (
    <form className="flex flex-wrap items-center gap-3.5 pt-10 pb-3">
      <SearchIcon />
      <input
        name="text"
        placeholder="search breeds"
        className="flex-1 min-w-fit outline outline-gray-300 rounded-full p-3"
      />
    </form>
  );
};

export default SearchInput;
