import React from "react";
import { Search } from "lucide-react";
import anatomyImg from "../../assets/anatomy.png";

const AnatomySection = () => (
  <div className="relative bg-gray-50 rounded-3xl shadow-md p-8 flex flex-col items-center h-[384px] w-full max-w-sm">
    <div className="relative w-full flex justify-center">
      <img
        src={anatomyImg}
        alt="Human Anatomy"
        className="w-40 h-80 select-none"
        draggable={false}
      />

{/* text section -- to modify inside the image only then touch*/}
      <div className="absolute top-[24%] left-[55%]">
        <div className="flex items-center bg-indigo-700 text-white px-2 py-1 rounded-xl shadow-lg font-semibold text-xs">
          <span className="mr-2 text-md">❤️</span>
          Healthy Heart
        </div>
      </div>

      <div className="absolute bottom-[23%] left-[45%]">
        <div className="flex items-center bg-cyan-300 text-cyan-900 px-2 py-0 rounded-xl shadow-lg font-semibold text-xs">
          <span className="mr-2 text-md">🦵</span>
          Healthy Leg
        </div>
      </div>
      {/* till here text section */}
    </div>

    <button className="absolute top-4 right-4 bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-colors">
      <Search size={22} className="text-gray-500" />
    </button>
  </div>
);

export default AnatomySection;
