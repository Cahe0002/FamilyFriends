"use client";
import Link from "next/link";
import { LuBellDot } from "react-icons/lu";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [hasNew, setHasNew] = useState(true);
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <button
          onClick={() => setHasNew(false)}
          type="button"
          aria-label={hasNew ? "Notifications (new)" : "Notifications"}
          className="rounded-full"
        >
          <LuBellDot
            className={`size-6 text-icon ${hasNew ? "[&>circle]:fill-coral [&>circle]:stroke-transparent cursor-pointer" : "[&>circle]:fill-none [&>circle]:stroke-transparent"}`}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
