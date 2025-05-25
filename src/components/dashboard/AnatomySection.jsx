import React from "react";
import { Search } from "lucide-react";
import anatomyImg from "../../assets/anatomy.png";

const AnatomySection = () => (
  <div className="relative bg-gray-50 rounded-3xl shadow-md p-6 sm:p-8 flex flex-col items-center h-[320px] sm:h-[384px] w-full max-w-xs sm:max-w-sm mx-auto">
    <div className="relative w-full flex justify-center">
      <img
        src={anatomyImg}
        alt="Human Anatomy"
        className="w-28 h-64 sm:w-40 sm:h-80 select-none"
        draggable={false}
      />

      <div className="absolute top-[20%] left-[50%] sm:top-[24%] sm:left-[55%] transform -translate-x-1/2 sm:translate-x-0">
        <div className="flex items-center bg-indigo-700 text-white px-2 py-1 rounded-xl shadow-lg font-semibold text-[10px] sm:text-xs">
          <span className="mr-1 sm:mr-2 text-sm sm:text-md">❤️</span>
          Healthy Heart
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[42%] sm:bottom-[23%] sm:left-[45%] transform -translate-x-1/2 sm:translate-x-0">
        <div className="flex items-center bg-cyan-300 text-cyan-900 px-2 py-1 rounded-xl shadow-lg font-semibold text-[10px] sm:text-xs">
          <span className="mr-1 sm:mr-2 text-sm sm:text-md">🦵</span>
          Healthy Leg
        </div>
      </div>
    </div>

    <button className="absolute top-3 right-3 bg-white hover:bg-gray-100 p-2 sm:p-3 rounded-full shadow-md transition-colors">
      <Search size={20} className="text-gray-500" />
    </button>
  </div>
);

export default AnatomySection;
