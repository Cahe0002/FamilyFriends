import BreedList from "./components/BreedList";
import SearchInput from "./components/SearchInput";

export default function ListView({ searchParams }) {
  return (
    <>
      <SearchInput />
      <div className="grid grid-cols-2 gap-4">
        <BreedList searchParams={searchParams} />
      </div>
    </>
  );
}
