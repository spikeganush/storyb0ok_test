import React from 'react';
import { RoundArrowButton } from './RoundArrowButton';
import { daysOfWeekFull, months } from '@/app/utils/constants';
import { CalendarEvent } from '@/app/utils/eventGenerator';

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
    <div className="mt-12">
      <h2 className="text-bold text-4xl text-acu-purple-100">DayView</h2>
      <div className=" mt-4 flex items-center gap-3">
        <RoundArrowButton direction="left" onClick={() => onChangeDay(-1)} />
        <h2 className="text-xl font-bold leading-none text-acu-purple-100">
          {daysOfWeekFull[adjustedDayIndex]} {selectedDate.getDate()}{' '}
          {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h2>
        <RoundArrowButton direction="right" onClick={() => onChangeDay(1)} />
      </div>
      <div className="mt-6 border-t pt-8">
        {events?.map((event, index) => (
          <div key={index} className="mb-4 border-b pb-8">
            <div className="flex justify-between">
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
              <div className="flex-1 p-4">
                <p className="mb-2 text-xl font-bold text-acu-charcoal-120">{event.subject_code}</p>
                <p>Lorem isum dolor sit amet</p>
              </div>
              <div className="flex-1 p-4">
                <p className="mb-2 text-xl font-bold text-acu-charcoal-120">Staff</p>
                <p>{event.staff || 'TBD Lecturer'}</p>
              </div>
              <div className="flex-[0.5] p-4">
                <p className="mb-2 text-xl font-bold text-acu-charcoal-120">Room</p>
                <p>{event.location || 'Online'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayView;
