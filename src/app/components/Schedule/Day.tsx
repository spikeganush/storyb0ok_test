import React from 'react';
import { cn } from '@/app/utils/helper';
import { CalendarEvent } from '@/app/utils/eventGenerator';
import EventList from './EventList';

type DayProps = {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isWeekend: boolean;
  onSelect: (day: number, month: number, year: number) => void;
  events: CalendarEvent[];
};

export const Day: React.FC<DayProps> = ({
  day,
  month,
  year,
  isCurrentMonth,
  isWeekend,
  isSelected,
  onSelect,
  events,
}) => {
  const isToday = (day: number, month: number, year: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };

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
      onClick={() => onSelect(day, month, year)}
    >
      <div
        className={cn(
          `m-1 flex aspect-square w-[1.875rem] items-center justify-center rounded-full bg-acu-black-30`,
          {
            'bg-acu-purple-100 text-white': isSelected,
            'border border-acu-purple-100': isToday(day, month, year) && !isSelected,
          },
        )}
      >
        {day}
      </div>
      {events.length > 0 && <EventList events={events} />}
    </div>
  );
};
