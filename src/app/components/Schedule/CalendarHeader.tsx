import React from 'react';
import { RoundArrowButton } from './RoundArrowButton';
import { months } from '@/utils/constants';

type CalendarHeaderProps = {
  currentDate: Date;
  onChangeMonth: (increment: number) => void;
  onOpenColorKey: () => void;
  onOpenAddEvent: () => void;
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onChangeMonth,
  onOpenColorKey,
  onOpenAddEvent,
}) => {
  return (
    <div className="flex flex-col-reverse items-center md:mb-4 md:flex-row md:justify-between">
      <div className="flex h-full w-full items-center justify-center gap-3 border-[1px] py-4 md:w-auto md:border-0 md:py-0">
        <RoundArrowButton direction="left" onClick={() => onChangeMonth(-1)} />
        <h2 className="text-xl font-bold leading-none text-acu-purple-100">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <RoundArrowButton direction="right" onClick={() => onChangeMonth(1)} />
      </div>
      <div className="mb-4 flex self-start md:mb-0 md:gap-x-8 md:self-auto">
        <button
          onClick={onOpenColorKey}
          className="relative text-acu-red-100 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:right-0 md:after:block md:after:h-[1px] md:after:w-full md:after:bg-acu-red-100 md:after:opacity-100 md:after:duration-300 md:after:content-[''] hover:md:after:opacity-0"
        >
          View Colour Key
        </button>
        <button
          onClick={onOpenAddEvent}
          className="hidden border border-acu-purple-100 px-8 py-2 text-acu-purple-100 icon-add before:mr-2 before:font-bold md:block"
        >
          Add event
        </button>
      </div>
    </div>
  );
};
