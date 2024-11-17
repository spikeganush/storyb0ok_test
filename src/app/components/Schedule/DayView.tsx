import React from 'react';
import { RoundArrowButton } from './RoundArrowButton';
import { daysOfWeekFull, months } from '@/utils/constants';
import { CalendarEvent } from '@/utils/eventGenerator';
import { cn } from '@/utils/helper';

type DayViewProps = {
  selectedDate: Date;
  onChangeDay: (increment: number) => void;
  events: CalendarEvent[];
};

const DayView: React.FC<DayViewProps> = ({ selectedDate, onChangeDay, events }) => {
  // Adjust the day index for a Monday-start week
  const adjustedDayIndex = (selectedDate.getDay() + 6) % 7;

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getDuration = (start: Date, end: Date): string => {
    const durationMs = end.getTime() - start.getTime();
    const durationMin = Math.round(durationMs / (1000 * 60));
    return `${durationMin}min`;
  };

  return (
    <div
      className={cn('border-l-[1px] border-r-[1px] pt-8 md:border-0 md:pt-12', {
        'mb-8 border-b-[1px] md:mb-0 md:border-b-0': events.length === 0,
      })}
    >
      <h2
        className={cn('ml-2 text-3xl font-bold text-acu-purple-100 md:ml-0 md:text-4xl', {
          'mb-4 md:mb-0': events.length === 0,
        })}
      >
        Day view
      </h2>
      <div className="hidden items-center gap-3 md:mt-4 md:flex">
        <RoundArrowButton direction="left" onClick={() => onChangeDay(-1)} />
        <h2 className="text-xl font-bold leading-none text-acu-purple-100">
          {daysOfWeekFull[adjustedDayIndex]} {selectedDate.getDate()}{' '}
          {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h2>
        <RoundArrowButton direction="right" onClick={() => onChangeDay(1)} />
      </div>
      {events.length > 0 && (
        <div className="mt-6 border-t pt-8">
          {events?.map((event, index) => (
            <div key={index} className="mb-4 border-b pb-8">
              <div className="relative block md:flex md:justify-between">
                <div className="flex-[0.5] p-4">
                  <p className="font-bold">{formatTime(new Date(event.start))}</p>
                  <p className="text-sm text-gray-500">
                    {getDuration(new Date(event.start), new Date(event.end))}
                  </p>
                </div>
                <div className="flex-1 p-4">
                  <p className="mb-2 text-xl font-bold text-acu-charcoal-120">
                    {event.activity_group_code}
                  </p>
                  <p>{event.description}</p>
                </div>
                <div className="absolute right-4 top-4 flex-1 md:relative md:p-4">
                  <p className="mb-2 rounded-md bg-acu-black-30 px-2 py-1 text-lg font-bold text-acu-charcoal-120 md:bg-transparent md:px-0 md:py-0 md:text-xl">
                    {event.subject_code}
                  </p>
                  <p className="hidden md:block">Lorem isum dolor sit amet</p>
                </div>
                <div className="flex-1 p-4">
                  <p className="mb-2 text-xl font-bold text-acu-charcoal-120">Staff</p>
                  <p>{event.staff || 'TBD Lecturer'}</p>
                </div>
                <div className="flex-[0.5] p-4">
                  <p className="mb-2 hidden text-xl font-bold text-acu-charcoal-120 md:block">
                    Room
                  </p>
                  <p className="flex items-center icon-map-pin before:mr-1 before:text-3xl before:font-bold before:text-acu-red-100 md:block md:before:hidden">
                    {event.location || 'Online'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DayView;
