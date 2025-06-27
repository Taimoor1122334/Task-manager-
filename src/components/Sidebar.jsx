import { useState } from 'react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('DASHBOARD');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
      {
        id: 'DASHBOARD',
        label: 'DASHBOARD',
        icon: (isActive) => (
          <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
            <div className={`w-2 h-2 rounded-sm ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            <div className={`w-2 h-2 rounded-sm ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            <div className={`w-2 h-2 rounded-sm ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            <div className={`w-2 h-2 rounded-sm ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
          </div>
        )
      },
      {
        id: 'PROJECTS',
        label: 'PROJECTS',
        icon: (isActive) => (
          <div className={`w-5 h-5 border-2 rounded ${isActive ? 'border-orange-600' : 'border-gray-400'}`}>
            <div className={`w-full h-1 mt-1 ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
          </div>
        )
      },
      {
        id: 'MY TASKS',
        label: 'MY TASKS',
        icon: (isActive) => (
          <div className="w-5 h-5 flex flex-col justify-center space-y-0.5">
            <div className={`w-full h-0.5 ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            <div className={`w-full h-0.5 ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            <div className={`w-full h-0.5 ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
          </div>
        )
      },
      {
        id: 'CALENDAR',
        label: 'CALENDAR',
        icon: (isActive) => (
          <div className={`w-5 h-5 border-2 rounded ${isActive ? 'border-orange-600' : 'border-gray-400'}`}>
            <div className="grid grid-cols-7 gap-0.5 p-0.5">
              <div className={`w-0.5 h-0.5 rounded-full ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
              <div className={`w-0.5 h-0.5 rounded-full ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
              <div className={`w-0.5 h-0.5 rounded-full ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
              <div className={`w-0.5 h-0.5 rounded-full ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
              <div className={`w-0.5 h-0.5 rounded-full ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            </div>
          </div>
        )
      },
      {
        id: 'TIME MANAGE 1',
        label: 'TIME MANAGE',
        icon: (isActive) => (
          <div className={`w-5 h-5 border-2 rounded-full relative ${isActive ? 'border-orange-600' : 'border-gray-400'}`}>
            <div className={`absolute top-1 left-2 w-0.5 h-1.5 ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
            <div className={`absolute top-2 left-1 w-1.5 h-0.5 ${isActive ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
          </div>
        )
      },
      {
        id: 'TIME MANAGE 2',
        label: 'TIME MANAGE',
        icon: (isActive) => (
          <div className={`w-5 h-5 border-2 rounded-full relative ${isActive ? 'border-orange-600' : 'border-gray-400'}`}>
            <div className={`absolute inset-1 border rounded-full ${isActive ? 'border-orange-600' : 'border-gray-400'}`}></div>
          </div>
        )
      },
      {
        id: 'SETTINGS',
        label: 'SETTINGS',
        icon: (isActive) => (
          <div className="w-5 h-5 relative">
            <div className={`w-5 h-5 border-2 rounded-full ${isActive ? 'border-orange-600' : 'border-gray-400'}`}></div>
            <div className={`absolute top-0 left-2 w-1 h-1 border rounded-full ${isActive ? 'border-orange-600' : 'border-gray-400'}`}></div>
            <div className={`absolute top-2 left-0 w-1 h-1 border rounded-full ${isActive ? 'border-orange-600' : 'border-gray-400'}`}></div>
            <div className={`absolute top-2 right-0 w-1 h-1 border rounded-full ${isActive ? 'border-orange-600' : 'border-gray-400'}`}></div>
            <div className={`absolute bottom-0 left-2 w-1 h-1 border rounded-full ${isActive ? 'border-orange-600' : 'border-gray-400'}`}></div>
          </div>
        )
      }
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
          fixed lg:static z-40 top-0 left-0c w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex-shrink-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">13</span>
          </div>
          {/* Close button only on small screens */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <li
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    px-4 py-3  flex items-center space-x-3 cursor-pointer transition-all duration-200
                    ${isActive 
                      ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }
                  `}
                >
                  {item.icon(isActive)}
                  <span className="font-medium">{item.label}</span>
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
