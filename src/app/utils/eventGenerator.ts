import { colorKeys } from '../components/Schedule/ColorKeyModal';

export type CalendarEvent = {
  id: string;
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  color: string;
};

export type CalendarEventsByMonth = {
  [key: string]: CalendarEvent[]; // Key is YYYY-MM
};

const eventTitles = [
  'Professional Term',
  'Semester 2',
  'International Orientation',
  'ACU Online Term',
  'Foundation Studies',
  'Workshop',
  'Exam Period',
  'Research Symposium',
  'Career Fair',
  'Guest Lecture',
  'Graduation Ceremony',
  'Open Day',
  'Mid-Semester Break',
  'Public Holiday',
  'ACU Orientation',
  'Semester 1',
  'Nurse Training',
  'Student Conference',
  'Research Showcase',
  'Research Seminar',
  'Research Workshop',
];

const generateRandomEvent = (date: Date): CalendarEvent => {
  const id = Math.random().toString(36).substr(2, 9);
  const title = eventTitles[Math.floor(Math.random() * eventTitles.length)];
  return {
    id,
    title,
    date: date.toISOString().split('T')[0],
    color: getRandomColor(),
  };
};

const getRandomColor = (): string => {
  return colorKeys[Math.floor(Math.random() * colorKeys.length)].color;
};

const generateEventsForMonth = (year: number, month: number): CalendarEvent[] => {
  const events: CalendarEvent[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    if (Math.random() < 0.3) {
      // 30% chance of an event on any given day
      events.push(generateRandomEvent(new Date(year, month, day)));
    }
  }

  return events;
};

export const generateEvents = (currentDate: Date): CalendarEventsByMonth => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;

  return {
    [`${prevYear}-${String(prevMonth + 1).padStart(2, '0')}`]: generateEventsForMonth(
      prevYear,
      prevMonth,
    ),
    [`${year}-${String(month + 1).padStart(2, '0')}`]: generateEventsForMonth(year, month),
    [`${nextYear}-${String(nextMonth + 1).padStart(2, '0')}`]: generateEventsForMonth(
      nextYear,
      nextMonth,
    ),
  };
};
