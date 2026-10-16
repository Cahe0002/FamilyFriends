import DetailCard from "@/app/components/DetailCard";
import Tag from "@/app/components/TagButton";

const DetailView = () => {
  return (
    <>
      <DetailCard name={"Affensinscher"} />
      <h2 className="font-bold text-3xl mt-3.5">Affenpinscher</h2>
      <ul className="mt-4 inline-flex flex-wrap gap-2 mb-4">
        <Tag color="blue">Confident</Tag>
        <Tag color="pink">Alert</Tag>
        <Tag color="green">Playful</Tag>
        <Tag color="yellow">Loyal</Tag>
      </ul>
      <div className="space-y-4 text-balance">
        <section className="space-y-0">
          <h3 className="font-medium text-sm text-icon/50">
            Breed description
          </h3>
          <p className="font-medium text-base text-icon/75">
            Small, sturdy toy breed with a distinctive monkey-like expression
            and shaggy, wiry coat. Known for its confident, terrier-like
            personality despite its small size.
          </p>
        </section>
        <section className="space-y-0">
          <h3 className="font-medium text-sm text-icon/50">Breed history</h3>
          <p className="font-medium text-base text-icon/75">
            Originating in 17th-century Germany, bred down from larger terriers
            to be skilled ratters in homes, kitchens and stables. Refined in
            Munich and Berlin, recognized by AKC in 1936. Name translates to
            monkey-like terrier.
          </p>
        </section>
      </div>
    </>
  );
};

export default DetailView;
