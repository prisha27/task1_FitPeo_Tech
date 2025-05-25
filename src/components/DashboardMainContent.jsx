import React from 'react'
import DashboardOverview from './dashboard/DashboardOverview'
import ActivityFeed from './dashboard/ActivityFeed'
import CalendarView from './dashboard/CalendarView'
import UpcomingSchedule from './dashboard/UpcomingSchedule'

const DashboardMainContent = () => {
  return (
    <>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-8">
    <div>
      <div className="p-1 w-150 ">
        <DashboardOverview />
      </div>

    <div className="mt-3 w-150">
          <ActivityFeed />
        </div>
        </div>

       <div className="flex flex-col gap-6">
      <CalendarView />
      <UpcomingSchedule />
    </div>
  </div>
        </>
  );
};

export default DashboardMainContent;