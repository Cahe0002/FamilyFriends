import Link from "next/link";
import { LuBellDot } from "react-icons/lu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full"
        >
          <LuBellDot className="size-6 text-icon [&>circle]:fill-coral [&>circle]:stroke-transparent" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
