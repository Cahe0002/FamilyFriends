import Image from "next/image";
import FavouriteBtn from "./FavouriteButton";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

const DetailCard = ({ className = "", name }) => {
  return (
    <div className="relative detail-card">
      <Image
        src="/elton.jpg"
        width={340}
        height={360}
        alt="Happy dog"
        className={`aspect-9/10 object-cover object-[75%_40%] rounded-4xl w-full ${className}`}
      />
      <Link
        href="/"
        className="absolute place-items-center top-6 left-6 grid size-8 rounded-full bg-white text-icon"
      >
        <LuChevronLeft className="size-5" />
      </Link>
      <FavouriteBtn className="absolute top-6 right-6 size-8" size="size-5" />
      <div className="absolute bottom-6 left-6 flex items-start gap-3 rounded-2xl bg-white/30 p-3 backdrop-blur-md">
        <Image
          src="/dummydog.jpg"
          width={32}
          height={32}
          alt="Affenpinscher"
          className="size-8 rounded-lg object-cover"
        />

        <span className="[text-box-trim:trim-both] text-base align-baseline font-medium text-white">
          {name}
        </span>
      </div>
    </div>
  );
};

export default DetailCard;
