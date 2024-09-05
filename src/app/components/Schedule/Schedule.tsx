import React, { useEffect, useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import ColorKeyModal from './ColorKeyModal';
import { CalendarEvent, CalendarEventsByMonth, generateEvents } from '@/app/utils/eventGenerator';
import DayView from './DayView';

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

  const changeDay = (increment: number): void => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + increment);
    setSelectedDate(newDate);
  };

  const getEventsForSelectedDate = (): CalendarEvent[] => {
    const dateKey = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}`;
    const fullDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    return events[dateKey]?.filter((event) => event.date === fullDate) || [];
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
      <DayView
        selectedDate={selectedDate}
        onChangeDay={changeDay}
        events={getEventsForSelectedDate()}
      />
    </div>
  );
};

export default Schedule;
