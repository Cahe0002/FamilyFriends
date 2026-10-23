import { LuHouse, LuStar, LuMessageCircle, LuUser } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-white/20 backdrop-blur-[30px] rounded-t-4xl">
      <nav>
        <ul className="w-full max-w-md mx-auto grid grid-cols-4 place-items-center h-20 text-gray-400">
          <li>
            <LuHouse className="size-6 text-coral" />
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
  );
};

export default Footer;
