import { FiCalendar } from "react-icons/fi";

export default function ProjectCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          {/* Google Logo */}
          <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          
          {/* Project Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Google</h3>
            <p className="text-sm text-gray-500">Google inc.</p>
          </div>
        </div>

        {/* Right Icons */}
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

      {/* Status Badges */}
      <div className="flex items-center justify-between mb-4">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
          Select Progress
        </span>
        <span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-red-200">
          High Priority
        </span>
      </div>

      {/* Task Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 font-medium">Task Done : 25/50</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: '50%'}}></div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex space-x-2 mb-6">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          IOS APP
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
          UI/UX
        </span>
      </div>

      {/* Team Members */}
      <div className=" mt-2">
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1000&q=80" alt="Team member" />
          <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=1000&q=80" alt="Team member" />
          <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80" alt="Team member" />
          <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80" alt="Team member" />
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">+5</div>
        </div>
        <div className="mt-2 ">
      <span className="flex items-center gap-1 bg-orange-50 py-1 px-2 rounded-full w-fit">
        <FiCalendar className="w-3.5 h-3.5 text-orange-600" />
        <span className="text-orange-600 text-xs font-semibold uppercase tracking-wide">
          DUE DATE: 20 JUNE
        </span>
      </span>
    </div>
      </div>
    </div>
  );
}