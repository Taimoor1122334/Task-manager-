import React, { useState, useEffect } from 'react';
import { FiPlay, FiPause, FiMoreVertical, FiClock } from 'react-icons/fi';

export default function TaskManagementCard() {
  const [activeTask, setActiveTask] = useState('google-wireframe');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [timers, setTimers] = useState({
    'google-wireframe': { minutes: 25, seconds: 20 },
    'slack-logo': { minutes: 30, seconds: 0 },
    'slack-dashboard': { minutes: 30, seconds: 0 },
    'slack-wireframe': { minutes: 30, seconds: 0 }
  });

  // Timer functionality
  useEffect(() => {
    let interval = null;
    if (activeTask) {
      interval = setInterval(() => {
        setTimers(prevTimers => {
          const newTimers = { ...prevTimers };
          const timer = newTimers[activeTask];
          
          timer.seconds += 1;
          if (timer.seconds >= 60) {
            timer.seconds = 0;
            timer.minutes += 1;
          }
          
          return newTimers;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTask]);

  const projects = [
    {
      id: 'google',
      name: 'Google',
      tasks: [
        {
          id: 'google-wireframe',
          name: 'Create Wireframe'
        }
      ]
    },
    {
      id: 'slack',
      name: 'Slack',
      tasks: [
        {
          id: 'slack-logo',
          name: 'Slack Logo Design'
        },
        {
          id: 'slack-dashboard',
          name: 'Dashboard Design'
        },
        {
          id: 'slack-wireframe',
          name: 'Create Wireframe'
        }
      ]
    }
  ];

  const toggleTask = (taskId) => {
    setActiveTask(activeTask === taskId ? null : taskId);
  };

  const toggleDropdown = (taskId) => {
    setDropdownOpen(dropdownOpen === taskId ? null : taskId);
  };

  const formatTime = (timer) => {
    const mins = String(timer.minutes).padStart(2, '0');
    const secs = String(timer.seconds).padStart(2, '0');
    return `${timer.minutes}m ${secs}s`;
  };

  return (
    <div className="bg-white rounded-lg p-4 max-w-md border border-gray-100">
      {projects.map((project, projectIndex) => (
        <div key={project.id} className={projectIndex > 0 ? 'mt-6' : ''}>
          {/* Project Header */}
          <div className="flex items-center justify-between mr-10 mb-3">
            <h3 className="text-base font-semibold text-gray-900">{project.name}</h3>
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FiPlay className="w-3 h-3 text-gray-500 ml-0.5" />
            </div>
          </div>

          {/* Tasks */}
          <div className="space-y-1">
            {project.tasks.map((task) => (
              <div 
                key={task.id} 
                className={`flex items-center justify-between py-2 px-1 rounded group hover:bg-gray-50 transition-colors ${
                  activeTask === task.id ? 'bg-orange-50 border-l-2 border-orange-500' : ''
                }`}
              >
                {/* Left Side - Clock Icon and Task Name */}
                <div className="flex items-center gap-3 flex-1">
                  <FiClock 
                    className={`w-4 h-4 ${
                      activeTask === task.id ? 'text-orange-500' : 'text-gray-400'
                    }`} 
                  />
                  <span className={`text-sm ${
                    activeTask === task.id ? 'text-gray-900 font-medium' : 'text-gray-600'
                  }`}>
                    {task.name}
                  </span>
                </div>

                {/* Right Side - Time, Play/Pause, More Options */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 font-mono min-w-16 text-right">
                    {formatTime(timers[task.id])}
                  </span>
                  
                  {/* Play/Pause Button */}
                  <div
                    onClick={() => toggleTask(task.id)}
                    className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                      activeTask === task.id
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {activeTask === task.id ? (
                      <FiPause className="w-3 h-3 text-white" />
                    ) : (
                      <FiPlay className="w-3 h-3 ml-0.5 text-gray-500" />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  <div className="relative">
                    <div
                      onClick={() => toggleDropdown(task.id)}
                      className="w-6 h-6 rounded flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors group-hover:opacity-100"
                    >
                      <FiMoreVertical className="w-3 h-3 text-gray-400" />
                    </div>
                    
                    {dropdownOpen === task.id && (
                      <div className="absolute right-0 top-7 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10 min-w-32">
                        <div className="w-full px-3 py-1.5 text-left text-xs text-gray-700 hover:bg-gray-50">
                          Edit Task
                        </div>
                        <div className="w-full px-3 py-1.5 text-left text-xs text-gray-700 hover:bg-gray-50">
                          Duplicate
                        </div>
                        <div className="w-full px-3 py-1.5 text-left text-xs text-red-600 hover:bg-gray-50">
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Click outside to close dropdown */}
      {dropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setDropdownOpen(null)}
        ></div>
      )}
    </div>
  );
}