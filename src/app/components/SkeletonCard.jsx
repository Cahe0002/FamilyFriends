import FavouriteBtn from "./FavouriteButton";

const SkeletonCard = () => (
  <div className=" detail-card animate-pulse">
    {/*Detailcard*/}
    <div className="relative aspect-9/10 w-full rounded-4xl bg-gray-200">
      {/*Back button*/}
      <div className="absolute top-6 left-6 size-8 rounded-full bg-gray-300" />
      {/*Favourite button*/}
      <FavouriteBtn className="absolute top-6 right-6 size-8" size="size-5" />
      {/* Name overlay */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-gray-300 p-3">
        <div className="size-8 rounded-lg bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200" />
      </div>
    </div>
    {/* Title */}
    <div className="mt-3.5 h-8 w-2/3 rounded bg-gray-200" />
    {/* Tags */}
    <div className="mt-4 mb-4 flex flex-wrap gap-2">
      <div className="h-7 w-20 rounded-full bg-gray-200" />
      <div className="h-7 w-16 rounded-full bg-gray-200" />
      <div className="h-7 w-24 rounded-full bg-gray-200" />
      <div className="h-7 w-14 rounded-full bg-gray-200" />
    </div>
    {/* Description */}
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="h-3 w-28 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
