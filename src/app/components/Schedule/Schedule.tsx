import React, { useEffect, useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import ColorKeyModal from './ColorKeyModal';
import { CalendarEventsByMonth, generateEvents } from '@/app/utils/eventGenerator';

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isColorKeyOpen, setIsColorKeyOpen] = useState(false);
  const [events, setEvents] = useState<CalendarEventsByMonth>({});

  useEffect(() => {
    setEvents(generateEvents(currentDate));
  }, [currentDate]);

  const handleDateSelect = (day: number, month: number, year: number) => {
    setSelectedDate(new Date(year, month, day));
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
      <CalendarHeader
        currentDate={currentDate}
        onChangeMonth={changeMonth}
        onOpenColorKey={() => setIsColorKeyOpen(true)}
      />
      <CalendarGrid
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectDate={handleDateSelect}
        events={events}
      />
      <ColorKeyModal isOpen={isColorKeyOpen} onClose={() => setIsColorKeyOpen(false)} />
    </div>
  );
};

export default Schedule;
