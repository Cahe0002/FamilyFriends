import { Manrope } from "next/font/google";
import Logo from "./components/Logo";
import {
  LuBellDot,
  LuStar,
  LuHouse,
  LuUser,
  LuMessageCircle,
} from "react-icons/lu";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Family Friends",
  description:
    "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col max-w-md mx-auto p-4">
        <header className="font-extrabold">
          <nav className="flex items-center justify-between flex-wrap">
            <Logo />
            <button type="button" aria-label="Notifications">
              <LuBellDot className="size-6 stroke-svg [&>circle]:fill-circle [&>circle]:stroke-transparent align-middle" />
            </button>
          </nav>
        </header>
        <main className="flex-1 pb-24">{children}</main>

        <footer className="fixed bottom-0 inset-x-0 bg-white/20 backdrop-blur-[30px] rounded-t-4xl">
          <nav>
            <ul className="w-full max-w-md mx-auto grid grid-cols-4 place-items-center h-20 text-gray-400">
              <li>
                <LuHouse className="size-6" />
              </li>
              <li>
                <LuStar className="size-6" />
              </li>
              <li>
                <LuMessageCircle className="size-6" />
              </li>
              <li>
                <LuUser className="size-6" />
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
