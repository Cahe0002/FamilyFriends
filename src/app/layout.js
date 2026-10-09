import { Manrope } from "next/font/google";
import Logo from "./components/Logo";
import { LuBellDot } from "react-icons/lu";

const ManropeSans = Manrope({
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
    <html lang="en" className={`${ManropeSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col m-4">
        <header className="font-extrabold">
          <nav className="flex items-center justify-between flex-wrap">
            <Logo />
            <ul>
              <li>
                <LuBellDot className="size-6 stroke-svg [&>circle]:fill-circle [&>circle]:stroke-transparent align-middle" />
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
