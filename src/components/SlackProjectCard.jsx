import React, { useState } from 'react';
import { FiStar, FiMoreVertical, FiCalendar } from 'react-icons/fi';

export default function SlackProjectCard() {
  const [isStarred, setIsStarred] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const teamMembers = [
    { id: 1, avatar: '👩‍💼', name: 'Alice' },
    { id: 2, avatar: '👨‍💻', name: 'Bob' },
    { id: 3, avatar: '👩‍🎨', name: 'Carol' },
    { id: 4, avatar: '👨‍🔬', name: 'Dave' },
    { id: 5, avatar: '👩‍🚀', name: 'Eve' }
  ];

  const progressPercentage = (20 / 30) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-lg font-bold">#</div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Slack</h3>
            <p className="text-gray-500 text-sm">Slack corporation</p>
          </div>
        </div>
         <div className="flex items-center space-x-2">
          {/* Star Icon */}
          <div className="w-8 h-8 border-gray-200 border-2 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          {/* More Options */}
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 ">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Status and Priority */}
      <div className="flex items-center justify-between mb-6">
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
          COMPLETED
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full border border-green-200">
          MEDIUM PRIORITY
        </span>
      </div>

      {/* Task Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 font-medium">Task Done : 20/30</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Platform Tags */}
      <div className="flex gap-2 mb-6">
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
          IOS APP
        </span>
        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
          ANDROID
        </span>
      </div>

      {/* Team Members */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm -ml-2 first:ml-0 hover:scale-110 transition-transform cursor-pointer"
              style={{ zIndex: teamMembers.length - index }}
              title={member.name}
            >
              {member.avatar}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600 -ml-2 font-medium">
            +5
          </div>
        </div>
      </div>

      {/* Due Date */}
      <div className="flex items-center gap-2 text-orange-500">
        <FiCalendar className="w-4 h-4 text-orange-500" />
        <span className="text-sm font-medium">DUE DATE: 16 JULY</span>
      </div>

    
    </div>
  );
}