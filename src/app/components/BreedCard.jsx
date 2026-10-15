import Image from "next/image";
import { LuStar } from "react-icons/lu";

const BreedCard = ({ breedname, description }) => {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src="/dummydog.jpg"
          width={160}
          height={114}
          alt="Happy dog"
          className="aspect-3/2 object-cover rounded-2xl w-auto"
        />
        <button className="absolute place-self-end m-2 cursor-pointer">
          <LuStar className=" box-content p-0.5 size-3.5 bg-white/25 backdrop-blur-lg fill-white stroke-0 rounded-full" />
        </button>
        <span className="text-base font-bold text-gray-800 pt-1.5">
          {breedname}
        </span>
        <p className="text-xs line-clamp-3 text-gray-800/40">{description}</p>
      </div>
    </>
  );
};

export default BreedCard;
