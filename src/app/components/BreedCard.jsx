import Image from "next/image";

const BreedCard = ({ breedname }) => {
  return (
    <>
      <Image src="/dummydog.jpg" width={400} height={400} alt="Happy dog" />
      <p>{breedname}</p>
    </>
  );
};

export default BreedCard;
