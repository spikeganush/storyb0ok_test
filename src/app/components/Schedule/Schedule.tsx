import React, { useEffect, useRef, useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import ColorKeyModal from './ColorKeyModal';
import { CalendarEvent, CalendarEventsByMonth, generateEvents } from '@/app/utils/eventGenerator';
import DayView from './DayView';
import AddEventModal from './AddEventModal';

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isColorKeyOpen, setIsColorKeyOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [events, setEvents] = useState<CalendarEventsByMonth>({});
  const dayViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEvents(generateEvents(currentDate));
  }, [currentDate]);

  const handleDateSelect = (day: number, month: number, year: number) => {
    const newSelectedDate = new Date(year, month, day);
    setSelectedDate(newSelectedDate);

    const selectedEvents = getEventsForDate(year, month, day);
    if (selectedEvents.length > 0 && dayViewRef.current) {
      dayViewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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

  const getEventsForDate = (year: number, month: number, day: number): CalendarEvent[] => {
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}`;
    const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events[dateKey]?.filter((event) => event.date === fullDate) || [];
  };

  const getEventsForSelectedDate = (): CalendarEvent[] => {
    return getEventsForDate(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
    );
  };

  return (
    <div className="container mx-auto">
      <CalendarHeader
        currentDate={currentDate}
        onChangeMonth={changeMonth}
        onOpenColorKey={() => setIsColorKeyOpen(true)}
        onOpenAddEvent={() => setIsAddEventOpen(true)}
      />
      <CalendarGrid
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectDate={handleDateSelect}
        events={events}
      />
      <ColorKeyModal isOpen={isColorKeyOpen} onClose={() => setIsColorKeyOpen(false)} />
      <AddEventModal isOpen={isAddEventOpen} onClose={() => setIsAddEventOpen(false)} />
      <div ref={dayViewRef} className="day-view">
        <DayView
          selectedDate={selectedDate}
          onChangeDay={changeDay}
          events={getEventsForSelectedDate()}
        />
      </div>
      <button
        onClick={() => setIsAddEventOpen(true)}
        className="block w-full border border-acu-purple-100 px-8 py-2 text-acu-purple-100 icon-add before:mr-2 before:font-bold md:hidden"
      >
        Add event
      </button>
    </div>
  );
};

export default Schedule;
