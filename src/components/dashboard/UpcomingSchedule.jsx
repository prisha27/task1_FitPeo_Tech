import React from "react";
import SimpleAppointmentCard from "../SimpleAppointmentCard";

const scheduleData = [
  {
    day: "On Thursday",
    appointments: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "💉",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧑‍⚕️",
      },
    ],
  },
];

const UpcomingSchedule = () => (
  <div className="-mt-2 ml-8">
    <div className="text-lg font-bold text-blue-900 mb-2">
      The Upcoming Schedule
    </div>
    {scheduleData.map((group, i) => (
      <div key={i} className="mb-4">
        <div className="text-sm text-gray-400 mb-2">{group.day}</div>
        <div className="flex gap-4">
          {group.appointments.map((appt, idx) => (
            <SimpleAppointmentCard
              key={idx}
              title={appt.title}
              time={appt.time}
              icon={appt.icon}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
