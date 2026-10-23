import BreedCard from "./components/BreedCard";
import SearchInput from "./components/SearchInput";

export default function ListView() {
  return (
    <>
      <SearchInput />
      <div className="grid grid-cols-2 gap-4">
        <BreedCard />
      </div>
    </>
  );
}
