import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="flex-1 bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center justify-between min-w-[140px]">
    <div>
      <div className="font-semibold text-blue-900 text-sm">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{time}</div>
    </div>
    <span className="text-xl ml-3">{icon}</span>
  </div>
);

export default SimpleAppointmentCard;
