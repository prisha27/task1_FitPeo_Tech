import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => (
  <div className="flex flex-col md:flex-row gap-8 -mt-10 mx-4">

    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-900">Dashboard</h2>
      </div>
      <AnatomySection />
    </div>
    
        <div className="w-full md:w-[220px] flex flex-col gap-3">
          <div className="flex justify-end">
    <span className="text-xs text-indigo-600 font-semibold cursor-pointer select-none flex items-center">
      This Week
      <svg
        className="ml-1 w-3 h-3 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        viewBox="0 0 10 6"
        aria-hidden="true"
      >
        <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
        </div>
    <HealthStatusCards />
  </div>
</div>
    
);

export default DashboardOverview;
