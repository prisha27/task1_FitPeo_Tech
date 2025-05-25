import React, {useState} from 'react';
import {
  Home, Clock, Calendar, Users,
  BarChart2, Clipboard, MessageSquare,
  HelpCircle, Settings,Menu
} from 'lucide-react';

const topLinks = [
  { name: 'Dashboard', icon: Home, active: true },
  { name: 'History', icon: Clock, active: false },
  { name: 'Calendar', icon: Calendar, active: false },
  { name: 'Appointments', icon: Users, active: false },
  { name: 'Statistics', icon: BarChart2, active: false },
  { name: 'Tests', icon: Clipboard, active: false },
];

const toolsLinks = [
{ name: 'Chat', icon: MessageSquare, active: false },
  { name: 'Support', icon: HelpCircle, active: false },
];

const Sidebar = () => {
const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
<aside
  className={`
    fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform
    transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0 md:static md:flex
    flex-col justify-between
  `} >  

  <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
        </button>
      <div className="pt-3 pb-0 px-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase">
          General
        </h2>
        <nav className="mt-6">
          <ul className="space-y-1">
            {topLinks.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                    item.active
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="px-6 pt-0">
        <h2 className="text-xs font-semibold text-gray-400 uppercase">
          Tools
        </h2>
        <nav className="mt-3">
          <ul >
            {toolsLinks.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                    item.active
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      <div className="p-6 border-t border-gray-100">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"
            >
              <Settings size={18} className="mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
