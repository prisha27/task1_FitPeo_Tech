import React from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const calendarDays = [
  {
    weekday: "Mon",
    date: 25,
    times: ["10:00", "11:00", "12:00"],
    highlight: false,
    selected: false,
  },
  {
    weekday: "Tues",
    date: 26,
    times: ["08:00", "09:00", "10:00"],
    highlight: true,
    selected: true, 
  },
  {
    weekday: "Wed",
    date: 27,
    times: ["12:00", "13:00"],
    highlight: false,
    selected: false,
  },
  {
    weekday: "Thurs",
    date: 28,
    times: ["10:00", "11:00"],
    highlight: false,
    selected: false,
  },
  {
    weekday: "Fri",
    date: 29,
    times: ["14:00", "16:00"],
    highlight: false,
    selected: false,
  },
  {
    weekday: "Sat",
    date: 30,
    times: ["14:00", "15:00", "16:00"],
    highlight: false,
    selected: false,
  },
  {
    weekday: "Sun",
    date: 31,
    times: ["10:00", "11:00"],
    highlight: false,
    selected: false,
  },
];

const CalendarView = () => (
  <div className="ml-5 -mt-5">

    <div className="flex justify-between items-center mb-5">
      <span className="font-semibold text-gray-700 text-lg">October 2021</span>
      <div className="flex items-center gap-3">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>
       
      </div>
    </div>
    <div className="grid grid-cols-7 gap-5 text-center mb-7">
      {calendarDays.map((d, i) => (
        <div key={i}>
          <div
            className={`text-xs mb-5 ${
              d.selected ? "text-indigo-700 font-bold" : "text-gray-400"
            }`}
          >
            {d.weekday}
          </div>
          <div
            className={`rounded-2xl py-2 ${
              d.selected ? "bg-indigo-50" : ""
            }`}
          >
            <div className="text-lg font-semibold">{d.date}</div>
            <div className="flex flex-col gap-1 mt-1">
              {d.times.map((t, idx) => (
                <div
                  key={idx}
                  className={`text-xs rounded-lg px-2 py-1 w-16 mx-auto ${
                    d.selected && t === "09:00"
                      ? "bg-indigo-700 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex gap-7 ml-2">
      <div className="flex-1 bg-indigo-700 text-white rounded-2xl p-4 flex flex-col min-w-[160px]">
        <div className="flex justify-between items-center">
          <span className="font-bold">Dentist</span>
          <span className="text-2xl">🦷</span>
        </div>
        <div className="text-xs mt-2">09:00-11:00</div>
        <div className="text-xs">Dr. Cameron Williamson</div>
      </div>
      <div className="flex-1 bg-indigo-100 text-indigo-900 rounded-2xl p-4 flex flex-col min-w-[160px]">
        <div className="flex justify-between items-center">
          <span className="font-bold">Physiotherapy Appointment</span>
          <span className="text-2xl">💪</span>
        </div>
        <div className="text-xs mt-2">11:00-12:00</div>
        <div className="text-xs">Dr. Kevin Djones</div>
      </div>
    </div>
  </div>
);

export default CalendarView;
