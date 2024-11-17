import React from 'react';
import { cn } from '@/utils/helper';
import { Day } from './Day';
import { CalendarEvent, CalendarEventsByMonth } from '@/utils/eventGenerator';
import { daysOfWeek } from '@/utils/constants';

type CalendarGridProps = {
  currentDate: Date;
  selectedDate: Date;
  onSelectDate: (day: number, month: number, year: number) => void;
  events: CalendarEventsByMonth;
};

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  selectedDate,
  onSelectDate,
  events,
}) => {
  const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number): number => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const isSelected = (year: number, month: number, day: number): boolean => {
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  const isWeekend = (dayIndex: number): boolean => {
    return dayIndex === 5 || dayIndex === 6;
  };

  const getEventsForDate = (year: number, month: number, day: number): CalendarEvent[] => {
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}`;
    const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events[dateKey]?.filter((event) => event.date === fullDate) || [];
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
      const dayIndex = (i + 7) % 7;
      const day = daysInPrevMonth - firstDayOfMonth + i + 1;
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      const dayEvents = getEventsForDate(prevYear, prevMonth, day);
      days.push(
        <Day
          key={`prev-${day}`}
          day={day}
          month={prevMonth}
          year={prevYear}
          isCurrentMonth={false}
          isSelected={isSelected(prevYear, prevMonth, day)}
          isWeekend={isWeekend(dayIndex)}
          onSelect={onSelectDate}
          events={dayEvents}
        />
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayIndex = (firstDayOfMonth + day - 1) % 7;
      const dayEvents = getEventsForDate(year, month, day);
      days.push(
        <Day
          key={`current-${day}`}
          day={day}
          month={month}
          year={year}
          isCurrentMonth={true}
          isSelected={isSelected(year, month, day)}
          isWeekend={isWeekend(dayIndex)}
          onSelect={onSelectDate}
          events={dayEvents}
        />
      );
    }

    // Next month's days
    const totalDaysShown = firstDayOfMonth + daysInMonth;
    const needsSixthRow = totalDaysShown > 35;

    if (needsSixthRow) {
      const remainingCells = 42 - days.length;
      for (let day = 1; day <= remainingCells; day++) {
        const dayIndex = (firstDayOfMonth + daysInMonth + day - 1) % 7;
        const nextMonth = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const dayEvents = getEventsForDate(nextYear, nextMonth, day);
        days.push(
          <Day
            key={`next-${day}`}
            day={day}
            month={nextMonth}
            year={nextYear}
            isCurrentMonth={false}
            isSelected={isSelected(nextYear, nextMonth, day)}
            isWeekend={isWeekend(dayIndex)}
            onSelect={onSelectDate}
            events={dayEvents}
          />
        );
      }
    }

    return days;
  };

  return (
    <div className="grid grid-cols-7 border-l-[1px] border-r-[1px] md:border-r-0">
      {daysOfWeek.map((day, index) => (
        <div
          key={day}
          className={cn(
            'flex h-[70px] items-center justify-center border-b-[1px] border-t-0 md:border-r-[1px] md:border-t-2 md:border-t-acu-purple-100 md:text-base',
            {
              'md:bg-acu-black-20': isWeekend(index),
            }
          )}
        >
          <span
            className={cn('w-[1ch] overflow-hidden md:w-auto md:overflow-visible', {
              'w-[1.7ch]': day === 'Mon' || day === 'Wed',
            })}
          >
            {day}
          </span>
        </div>
      ))}
      {renderCalendar()}
    </div>
  );
};
