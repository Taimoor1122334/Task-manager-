import { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  format
} from 'date-fns';

export default function PrettyCustomCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Fake events (map day in month -> array of colors for dots)


  const renderHeader = () => (
    <div className="flex justify-between items-center px-4 py-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {format(currentMonth, 'MMM yyyy')}
      </h2>
      <div className="flex space-x-2">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-600"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );

  const renderDays = () => {
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return (
      <div className="grid grid-cols-7 gap-y-1 px-1 text-xs sm:text-sm font-medium ">
        {weekdays.map((day) => (
          <div key={day} className="text-center">{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const dayNumber = day.getDate();
        const isInMonth = isSameMonth(day, monthStart);
        const isSelected = isSameDay(day, selectedDate);

        days.push(
          <div
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
            className={`flex flex-col items-center justify-center rounded-full aspect-square cursor-pointer transition-all duration-150
              ${isSelected ? 'bg-orange-500 text-white' : 'hover:bg-orange-100'}
              ${!isInMonth ? 'text-gray-300' : ''}
            `}
          >
            <span className="text-xs sm:text-sm">{format(day, 'd')}</span>
           
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="grid grid-cols-7 gap-y-1 px-1">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="bg-white pb-4 rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-full sm:max-w-xs w-full">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
