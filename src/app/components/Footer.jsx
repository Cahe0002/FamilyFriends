"use client";
import Link from "next/link";
import { LuHouse, LuStar, LuMessageCircle, LuUser } from "react-icons/lu";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const iconActive = (active) =>
    `size-6 ${active ? "text-coral" : "text-gray-400"}`;
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-white/20 backdrop-blur-[30px] rounded-t-4xl">
      <nav>
        <ul className="w-full max-w-md mx-auto grid grid-cols-4 place-items-center h-20 text-gray-400">
          <li>
            <Link href="/" aria-label="Home">
              <LuHouse className={iconActive(pathname === "/")} />
            </Link>
          </li>
          <li>
            <Link href="/favourites" aria-label="Favourites">
              <LuStar className={iconActive(pathname === "/favourites")} />
            </Link>
          </li>
          <li>
            <LuMessageCircle className={iconActive(false)} />
          </li>
          <li>
            <LuUser className={iconActive(false)} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
