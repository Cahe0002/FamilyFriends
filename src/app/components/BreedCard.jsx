import Image from "next/image";
import FavouriteBtn from "./FavouriteButton";
import Link from "next/link";

const BreedCard = ({ breedname, description }) => {
  return (
    <>
      <div className="breed-card">
        <div className="relative">
          <Link href="/detailview">
            <Image
              src="/elton.jpg"
              width={160}
              height={114}
              alt="Happy dog"
              className="aspect-3/2 object-cover object-[75%_40%] rounded-2xl w-full"
            />
          </Link>
          <FavouriteBtn className="absolute top-2 right-2" />
          <div className="px-3 pt-2 pb-3">
            <span className="text-base font-bold text-gray-800 pt-1.5">
              {breedname}
            </span>
            <p className="text-xs whitespace-pre-line text-gray-800/40">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreedCard;
