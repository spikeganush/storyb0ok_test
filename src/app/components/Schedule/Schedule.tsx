import { cn } from '@/app/utils/helper';
import React, { useEffect, useRef, useState } from 'react';

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
  isCurrentDay: boolean;
  isWeekend: boolean;
};

const Day: React.FC<DayProps> = ({ day, isCurrentMonth, isCurrentDay, isWeekend }) => {
  return (
    <div
      className={cn(
        `h-[130px] cursor-pointer border-b-[1px] border-r-[1px] text-center hover:bg-gray-100 focus-visible:bg-gray-100`,
        {
          'bg-acu-black-20': isWeekend,
          'text-acu-charcoal-100': !isCurrentMonth,
        },
      )}
      tabIndex={0}
    >
      <div
        className={cn(
          `m-1 flex aspect-square w-[1.875rem] items-center justify-center rounded-full bg-[#f5f5f5]`,
          {
            'bg-acu-purple-100 text-white': isCurrentDay,
          },
        )}
      >
        {day}
      </div>
    </div>
  );
};

const RoundArrowButton: React.FC<{
  direction: 'left' | 'right';
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ direction, onClick }) => (
  <button
    className={cn(
      `flex aspect-square w-6 items-center justify-center rounded-full border border-acu-red-100 text-xs text-acu-red-100 icon-acu-arrow_right`,
      {
        'rotate-180': direction === 'left',
      },
    )}
    onClick={onClick}
  ></button>
);

type ColorKey = {
  color: string;
  label: string;
};

type ColorKeyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ColorKeyModal: React.FC<ColorKeyModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const colorKeys: ColorKey[] = [
    { color: 'bg-acu-red-100', label: 'Due today (Red)' },
    { color: 'bg-acu-schedule-light-blue', label: 'Lecture (light blue)' },
    { color: 'bg-acu-schedule-orange', label: 'Tutorial (orange)' },
    { color: 'bg-acu-schedule-light-green', label: 'Practical (light green)' },
    { color: 'bg-acu-schedule-dark-purple', label: 'Seminar (dark purple)' },
    { color: 'bg-acu-schedule-dark-megenta', label: 'Intensive (dark megenta)' },
    { color: 'bg-acu-schedule-blue', label: 'Workshop (blue)' },
    { color: 'bg-acu-schedule-olive', label: 'Exams (olive)' },
    { color: 'bg-acu-schedule-green', label: 'Study session or conference (green)' },
    { color: 'bg-acu-purple-100', label: 'Social event or careers workshop (purple)' },
    { color: 'bg-acu-charcoal-100', label: 'Sport (charcoal)' },
  ];

  return (
    <dialog
      ref={dialogRef}
      className="w-[498px] rounded-lg p-4 shadow-xl backdrop:backdrop-blur-sm"
      onClose={onClose}
    >
      <h3 className="relative mb-4 pb-6 text-[2.025rem] font-bold text-acu-purple-100 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[0.5px] after:bg-acu-black-20 after:content-['']">
        Colour key
      </h3>
      <ul className="relative mb-4 space-y-2 pb-6 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[0.5px] after:bg-acu-black-20 after:content-['']">
        {colorKeys.map(({ color, label }) => (
          <li key={color} className="flex items-center">
            <span
              className={cn('mr-2 h-4 w-4 rounded-full', {
                [color]: color,
              })}
            ></span>
            {label}
          </li>
        ))}
      </ul>
      <button
        onClick={onClose}
        className="float-end mt-4 border border-acu-purple-100 bg-white px-5 py-2 text-acu-purple-100 transition-colors hover:bg-acu-purple-100 hover:text-white"
      >
        Cancel
      </button>
    </dialog>
  );
};

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isColorKeyOpen, setIsColorKeyOpen] = useState(false);

  const openColorKey = () => setIsColorKeyOpen(true);
  const closeColorKey = () => setIsColorKeyOpen(false);

  const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number): number => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Convert Sunday (0) to 6, and shift other days
  };

  const isCurrentDay = (year: number, month: number, day: number): boolean => {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  };

  const isWeekend = (dayIndex: number): boolean => {
    return dayIndex === 5 || dayIndex === 6; // 5 is Saturday, 6 is Sunday
  };

  const renderCalendar = (): JSX.Element[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days: JSX.Element[] = [];

    // Previous month's days
    for (let i = 0; i < firstDayOfMonth; i++) {
      const dayIndex = (i + 7) % 7; // Adjust to start from Monday
      const day = daysInPrevMonth - firstDayOfMonth + i + 1;
      days.push(
        <Day
          key={`prev-${day}`}
          day={day}
          isCurrentMonth={false}
          isCurrentDay={false}
          isWeekend={isWeekend(dayIndex)}
        />,
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayIndex = (firstDayOfMonth + day - 1) % 7;
      days.push(
        <Day
          key={`current-${day}`}
          day={day}
          isCurrentMonth={true}
          isCurrentDay={isCurrentDay(year, month, day)}
          isWeekend={isWeekend(dayIndex)}
        />,
      );
    }

    // Calculate if we need a 6th row
    const totalDaysShown = firstDayOfMonth + daysInMonth;
    const needsSixthRow = totalDaysShown > 35;

    // Next month's days (only if needed)
    if (needsSixthRow) {
      const remainingCells = 42 - days.length;
      for (let day = 1; day <= remainingCells; day++) {
        const dayIndex = (firstDayOfMonth + daysInMonth + day - 1) % 7;
        days.push(
          <Day
            key={`next-${day}`}
            day={day}
            isCurrentMonth={false}
            isCurrentDay={false}
            isWeekend={isWeekend(dayIndex)}
          />,
        );
      }
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
        <div className="flex h-full items-center gap-3">
          <RoundArrowButton direction="left" onClick={() => changeMonth(-1)} />
          <h2 className="text-xl font-bold leading-none text-acu-purple-100">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <RoundArrowButton direction="right" onClick={() => changeMonth(1)} />
        </div>
        <div className="flex gap-x-8">
          <button
            onClick={openColorKey}
            className="relative text-acu-red-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-[1px] after:w-full after:bg-acu-red-100 after:opacity-100 after:duration-300 after:content-[''] hover:after:opacity-0"
          >
            View Colour Key
          </button>
          <button className="border border-acu-purple-100 px-8 py-2 text-acu-purple-100 icon-add before:mr-2 before:font-bold">
            Add event
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 border-l-[1px]">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={cn(
              'flex h-[70px] items-center justify-center border-b-[1px] border-r-[1px] border-t-2 border-t-acu-purple-100',
              {
                'bg-acu-black-20': isWeekend(index),
              },
            )}
          >
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
      <ColorKeyModal isOpen={isColorKeyOpen} onClose={closeColorKey} />
    </div>
  );
};

export default Schedule;
