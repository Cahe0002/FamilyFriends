import Link from "next/link";
import "./globals.css";
import BreedCard from "./components/BreedCard";
import { LuChevronLeft } from "react-icons/lu";

import { LuStar } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import SearchInput from "./components/SearchInput";

export default function ListView() {
  return (
    <>
      <SearchInput />
      <Link href="/detailview">Go to DetailView</Link>
      <BreedCard breedname={"dog"} />
      <LuChevronLeft />
      <LuStar />
      <LuSearch />
      <LuHouse />
      <LuUser />
    </>
  );
}
