import Form from "next/form";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <Form action="/" className="flex flex-wrap items-center gap-3.5 pt-10 pb-6">
      <button
        type="submit"
        aria-label="Search"
        className="flex items-center justify-center bg-coral rounded-full size-12 shrink-0 cursor-pointer"
      >
        <LuSearch className="size-5 stroke-white stroke-3 -scale-x-100" />
      </button>
      <input
        type="search"
        name="query"
        aria-label="Search breeds"
        placeholder="search breeds"
        className="flex-1 min-w-fit outline outline-gray-300 rounded-full p-3"
      />
    </Form>
  );
};

export default SearchInput;
