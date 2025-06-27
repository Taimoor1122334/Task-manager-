import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Create Wireframe', completed: false, comments: 0, attachments: 0 },
    { id: 2, title: 'Slack Logo Design', completed: false, comments: 3, attachments: 5 },
    { id: 3, title: 'Dashboard Design', completed: false, comments: 0, attachments: 5 },
    { id: 4, title: 'Create Wireframe', completed: true, comments: 0, attachments: 0 },
    { id: 5, title: 'Slack Logo Design', completed: true, comments: 0, attachments: 0 },
    { id: 6, title: 'App Icon Design', completed: false, comments: 0, attachments: 0 },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTaskTitle.trim(), completed: false, comments: 0, attachments: 0 }]);
      setNewTaskTitle('');
      setShowAddTask(false);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 max-w-full sm:max-w-md w-full">
      {/* Header */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-6 gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 min-w-0 truncate">
          My Tasks <span className="text-gray-400 font-normal">({totalCount.toString().padStart(2, '0')})</span>
        </h3>
        <div
          onClick={() => setShowAddTask(!showAddTask)}
          className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Add Task Input */}
      {showAddTask && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter task title..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 mb-2 text-sm"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            autoFocus
          />
          <div className="flex justify-end flex-wrap gap-2">
            <button 
              onClick={() => setShowAddTask(false)}
              className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button 
              onClick={addTask}
              className="px-3 py-1 text-sm bg-blue-500 text-gray-500 rounded hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={task.id} className="flex flex-wrap items-center justify-between group gap-2">
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              {/* Task Number */}
              <span className="text-gray-400 text-sm font-medium w-6 flex-shrink-0">
                {(index + 1).toString().padStart(2, '0')}
              </span>

              {/* Task Title */}
              <span className={`flex-1 truncate text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                {task.title}
              </span>

              {/* Comments & Attachments */}
              <div className="flex items-center flex-shrink-0 space-x-3">
                {task.comments > 0 && (
                  <div className="flex items-center space-x-1 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-xs">{task.comments}</span>
                  </div>
                )}
                {task.attachments > 0 && (
                  <div className="flex items-center space-x-1 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-xs">{task.attachments}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Checkbox & Delete */}
            <div className="flex items-center flex-shrink-0 space-x-2">
              <div
                onClick={() => deleteTask(task.id)}
                className="w-5 h-5 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div 
                onClick={() => toggleTask(task.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {task.completed && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}
