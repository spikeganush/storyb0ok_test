import React, { useState } from 'react';

const daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type DayProps = {
  day: number;
  isCurrentMonth: boolean;
};

const Day: React.FC<DayProps> = ({ day, isCurrentMonth }) => (
  <div
    className={`cursor-pointer border p-2 text-center hover:bg-gray-100 ${isCurrentMonth ? '' : 'text-gray-400'}`}
  >
    {day}
  </div>
);

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number): number =>
    new Date(year, month, 1).getDay();

  const renderCalendar = (): JSX.Element[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days: JSX.Element[] = [];

    // Previous month's days
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = daysInPrevMonth - firstDayOfMonth + i + 1;
      days.push(<Day key={`prev-${day}`} day={day} isCurrentMonth={false} />);
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(<Day key={`current-${day}`} day={day} isCurrentMonth={true} />);
    }

    // Next month's days
    const remainingCells = 42 - days.length; // 6 rows * 7 days = 42
    for (let day = 1; day <= remainingCells; day++) {
      days.push(<Day key={`next-${day}`} day={day} isCurrentMonth={false} />);
    }

    return days;
  };

  const changeMonth = (increment: number): void => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + increment);
      return newDate;
    });
  };

  return (
    <div className="container">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => changeMonth(-1)} className="p-2">
            {'<'}
          </button>
          <h2 className="text-xl font-bold text-acu-purple-100">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={() => changeMonth(1)} className="p-2">
            {'>'}
          </button>
        </div>
        <div className="flex gap-x-8">
          <button className="relative text-acu-red-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-[1px] after:w-full after:bg-acu-red-100 after:opacity-100 after:duration-300 after:content-[''] hover:after:opacity-0">
            View Colour Key
          </button>
          <button
            className="relative border border-acu-purple-100 px-8 py-2 text-acu-purple-100 icon-add before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:font-bold
          "
          >
            Add event
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Schedule;
