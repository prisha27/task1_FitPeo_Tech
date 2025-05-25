import React from "react";

const healthCards = [
  {
    icon: "🫁",
    title: "Lungs",
    date: "26 Oct 2021",
    color: "bg-red-800",
    progress: "w-4/5",
  },
  {
    icon: "🦷",
    title: "Teeth",
    date: "26 Oct 2021",
    color: "bg-cyan-400",
    progress: "w-4/5",
  },
  {
    icon: "🦴",
    title: "Bone",
    date: "26 Oct 2021",
    color: "bg-orange-600",
    progress: "w-4/5",
  },
];

const HealthStatusCards = () => (
  <div className="flex flex-col gap-6">
    {healthCards.map((item) => (
      <div
        key={item.title}
        className="bg-white rounded-xl shadow p-4 flex flex-col gap-2"
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          <div>
            <div className="text-lg font-bold text-blue-900">{item.title}</div>
            <div className="text-xs text-gray-400">Date: {item.date}</div>
          </div>
        </div>

        {/*the status bar */}
        <div className="mt-2 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className={`${item.color} h-2 rounded-full ${item.progress}`}></div>
        </div>
      </div>
    ))}
    <div className="flex justify-end mt-1 mr-3">
      <a href="#" className="text-xs text-indigo-600 font-semibold underline">
        Details
      </a>
    </div>
  </div>
);

export default HealthStatusCards;
