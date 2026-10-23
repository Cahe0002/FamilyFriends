import { LuPawPrint } from "react-icons/lu";

const Loading = () => {
  return (
    <>
      <div className="col-span-full flex min-h-[60vh] flex-col items-center justify-center gap-6">
        <LuPawPrint className="size-40 fill-coral stroke-[1.5] animate-pulse" />
        <h2 className="text-3xl">Loading...</h2>
      </div>
    </>
  );
};

export default Loading;
