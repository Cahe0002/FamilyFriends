import Link from "next/link";
import "./globals.css";
import BreedCard from "./components/BreedCard";

import SearchInput from "./components/SearchInput";

export default function ListView() {
  return (
    <>
      <SearchInput />
      <Link href="/detailview">Go to DetailView</Link>
      <div className="grid grid-cols-2 gap-4">
        <BreedCard
          breedname={"Affenpinscher"}
          description="Northern,
Germany"
        />
        <BreedCard breedname={"Afghan Hound"} description={"Afghanistan"} />
        <BreedCard
          breedname={"Airedale Terrier"}
          description={"Yorkshire, England"}
        />
        <BreedCard breedname={"Akbash"} description={"Western Turkey"} />
        <BreedCard breedname={"Affenpinscher"} />
        <BreedCard breedname={"Afghan Hound"} />
      </div>
    </>
  );
}
