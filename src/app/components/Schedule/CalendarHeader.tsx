import React from 'react';
import { RoundArrowButton } from './RoundArrowButton';

type CalendarHeaderProps = {
  currentDate: Date;
  onChangeMonth: (increment: number) => void;
  onOpenColorKey: () => void;
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onChangeMonth,
  onOpenColorKey,
}) => {
  const months = [
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

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex h-full items-center gap-3">
        <RoundArrowButton direction="left" onClick={() => onChangeMonth(-1)} />
        <h2 className="text-xl font-bold leading-none text-acu-purple-100">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <RoundArrowButton direction="right" onClick={() => onChangeMonth(1)} />
      </div>
      <div className="flex gap-x-8">
        <button
          onClick={onOpenColorKey}
          className="relative text-acu-red-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-[1px] after:w-full after:bg-acu-red-100 after:opacity-100 after:duration-300 after:content-[''] hover:after:opacity-0"
        >
          View Colour Key
        </button>
        <button className="border border-acu-purple-100 px-8 py-2 text-acu-purple-100 icon-add before:mr-2 before:font-bold">
          Add event
        </button>
      </div>
    </div>
  );
};
