import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-cyan-400">Health<span className='text-blue-900'>care.</span></h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User avatar"
              className="w-8 h-8 rounded-lg object-cover"
            />
          </div>
          <button className="bg-indigo-600 text-white p-2 rounded-xl">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;