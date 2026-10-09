import Link from "next/link";
import Logo from "./components/Logo";
import "./globals.css";
import BreedCard from "./components/BreedCard";
import { LuChevronLeft } from "react-icons/lu";
import { LuBellDot } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

export default function ListView() {
  return (
    <>
      <Logo />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
      <BreedCard />
      <LuChevronLeft />
      <LuBellDot />
      <LuStar />
      <LuSearch />
      <LuHouse />
      <LuMessageCircle />
      <LuUser />
    </>
  );
}
