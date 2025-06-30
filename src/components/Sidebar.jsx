import { useState } from 'react';
import { FiGrid, FiBriefcase, FiMenu, FiCalendar, FiClock, FiPieChart, FiSettings } from 'react-icons/fi';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('DASHBOARD');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 'DASHBOARD',
      label: 'DASHBOARD',
      icon: FiGrid,
    },
    {
      id: 'PROJECTS',
      label: 'PROJECTS',
      icon: FiBriefcase,
    },
    {
      id: 'MY TASKS',
      label: 'MY TASKS',
      icon: FiMenu,
    },
    {
      id: 'CALENDAR',
      label: 'CALENDAR',
      icon: FiCalendar,
    },
    {
      id: 'TIME MANAGE 1',
      label: 'TIME MANAGE',
      icon: FiClock,
    },
    {
      id: 'TIME MANAGE 2',
      label: 'TIME MANAGE',
      icon: FiPieChart,
    },
    {
      id: 'SETTINGS',
      label: 'SETTINGS',
      icon: FiSettings,
    },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    setIsOpen(false); // Close sidebar after selection on mobile
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static z-40 top-0 left-0 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-300 ease-in-out
          w-56 sm:w-60 md:w-64 h-screen
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="p-4 sm:p-5 md:p-6 border-b border-gray-200 flex-shrink-0 flex items-center justify-between">
          <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">13</span>
          </div>
          {/* Close button only on small screens */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 sm:p-4 flex-1 overflow-y-auto">
          <ul className="space-y-1 sm:space-y-2">
            {menuItems.map((item) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    px-3 py-2 sm:px-4 sm:py-3 flex items-center space-x-3 cursor-pointer transition-all duration-200
                    ${isActive 
                      ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-orange-600' : 'text-gray-400'}`} />
                  <span className="font-medium text-sm sm:text-base">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Backdrop for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar toggle button (should be added in your Topbar or main layout) */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded bg-white border lg:hidden shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </>
  );
}