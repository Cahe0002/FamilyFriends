import DetailCard from "@/app/components/DetailCard";
import SkeletonCard from "@/app/components/SkeletonCard";
import Tag from "@/app/components/Tag";
import { Suspense } from "react";

const DetailView = ({ params }) => {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <FetchDetailBreed params={params} />
    </Suspense>
  );
};
export default DetailView;

async function FetchDetailBreed({ params }) {
  const { id } = await params;
  const options = {
    headers: { "x-api-key": process.env.API_KEY },
    cache: "no-store",
  };
  const [detailsRes, favouritesRes] = await Promise.all([
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`, options),
    fetch("https://api.thedogapi.com/v1/favourites?limit=100", options),
  ]);
  if (!detailsRes.ok || !favouritesRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [details, favourites] = await Promise.all([
    detailsRes.json(),
    favouritesRes.json(),
  ]);

  const imgId = details.image?.id ?? details.reference_image_id;
  const favourite = favourites.find((f) => f.image_id === imgId);
  const temperament = details.temperament?.split(", ") ?? [];

  return (
    <>
      <DetailCard details={details} favouriteId={favourite?.id ?? null} />
      <h2 className="font-bold text-3xl mt-3.5">{details.name}</h2>
      <ul className="mt-4 inline-flex flex-wrap gap-2 mb-4 capitalize">
        <Tag color="blue">{temperament[0]}</Tag>
        <Tag color="pink">{temperament[1]}</Tag>
        <Tag color="green">{temperament[2]}</Tag>
        <Tag color="yellow">{temperament[3]}</Tag>
      </ul>
      <div className="space-y-4 text-balance">
        <section className="space-y-0">
          <h3 className="font-medium text-sm text-icon/50">
            Breed description
          </h3>
          <p className="font-medium text-base text-icon/75">
            {details.description}
          </p>
        </section>
        <section className="space-y-0">
          <h3 className="font-medium text-sm text-icon/50">Breed history</h3>
          <p className="font-medium text-base text-icon/75">
            {details.history}
          </p>
        </section>
      </div>
    </>
  );
}
