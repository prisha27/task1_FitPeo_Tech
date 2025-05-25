import React from "react";

const activityData = [
  [
    { height: 67, color: "bg-gray-300" },
    { height: 40, color: "bg-cyan-400" },
    { height: 80, color: "bg-indigo-700" },
  ],
  [
    { height: 56, color: "bg-cyan-400" },
    { height: 36, color: "bg-gray-300" },
    { height: 44, color: "bg-indigo-700" },
  ],
  [
    { height: 28, color: "bg-gray-300" },
    { height: 32, color: "bg-cyan-400" },
    { height: 24, color: "bg-indigo-700" },
  ],
  [
    { height: 52, color: "bg-gray-300" },
    { height: 20, color: "bg-indigo-700" },
    { height: 32, color: "bg-gray-300" },
  ],
  [
    { height: 56, color: "bg-cyan-400" },
    { height: 38, color: "bg-indigo-700" },
    { height: 48, color: "bg-gray-300" },
  ],
  [
    { height: 75, color: "bg-gray-300" },
    { height: 24, color: "bg-cyan-400" },
    { height: 32, color: "bg-indigo-700" },
  ],
  [
    { height: 52, color: "bg-gray-300" },
    { height: 40, color: "bg-cyan-400" },
    { height: 28, color: "bg-indigo-700" },
  ],
];
const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const ActivityFeed = () => (
  <div className="bg-white rounded-xl shadow-md px-4 py-5 w-full max-w-xl">
    <div className="flex justify-between items-center">
      <span className="font-bold text-blue-900 text-lg">Activity</span>
      <span className="text-xs text-gray-400 font-medium">
        3 appointment on this week
      </span>
    </div>
    <div className="flex items-end justify-between h-32">
      {activityData.map((bars, dayIdx) => (
        <div key={dayIdx} className="flex flex-col items-center w-10">
  
          <div className="flex items-end space-x-1 mb-1">
            {bars.map((bar, i) => (
              <div
                key={i}
                className={`${bar.color} rounded-full`}
                style={{
                  width: "6px",
                  height: `${bar.height}px`,
                  marginLeft: i === 0 ? 0 : "2px",
                }}
              />
            ))}
          </div>
   
          <span className="text-xs text-gray-400">{days[dayIdx]}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
