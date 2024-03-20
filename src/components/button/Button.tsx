import { useState } from "react";
import clsx from "clsx";

export default function Button({
    onButtonClick,
}: {
    onButtonClick: () => void;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-full items-center justify-center flex">
      <div className="p-5">
        <div
        className={clsx(
            "rounded-lg border border-2 bg-blue-500 border-blue-500 group hover:bg-blue-700 hover:border-blue-700",
            "transition duration-500 ease-in-out",
            clicked && "opacity-0",
        )}
          onClick={() => {
            setClicked(true);
            setTimeout(() => { onButtonClick() }, 700);
          }}
        >
          <button className="bg-blue-500 rounded-lg text-white border-t-2 border-blue-300 font-bold items-center justify-center text-xl sm:text-2xl md:text-3xl p-5 md:p-10 transition duration-300 ease-in-out group-hover:border-blue-400 group-hover:bg-blue-700">
            Find Food Trucks Open Now
          </button>
        </div>
      </div>
    </div>
  );
}
