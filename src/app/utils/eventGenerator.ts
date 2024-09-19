import { colorKeys } from './constants';

export type CalendarEvent = {
  id: string;
  subject_code: string;
  activity_group_code: string;
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  color: string;
  start: string; // ISO datetime string
  end: string; // ISO datetime string
  description: string;
  staff: string;
  location: string;
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

const subject_code = [
  'ACCT101',
  'BUSN103',
  'XPTX002_1C_Sem2',
  'ARTS332',
  'HIST101',
  'HIST102',
  'LAW101',
  'LAW102',
  'BUSN154',
  'NURS276',
];

const eventsDescription = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud.',
  'Duis aute irure dolor in reprehenderit in voluptate.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
];

const locations = ['Online'];

const activityGroupeCodes = [
  'LAB 02',
  'LECTURE 11',
  'TUTORIAL 05',
  'LECTURE 01',
  'LECTURE A',
  'LA',
  'LECTURE 02',
];

const staff = [
  'Dr. Smith',
  'Prof. Johnson',
  'Ms. Williams',
  'Mr. Brown',
  'Dr. Davis',
  'TBD Lecturer',
];

const generateRandomEvent = (date: Date): CalendarEvent => {
  const id = Math.random().toString(36).substr(2, 9);
  const title = eventTitles[Math.floor(Math.random() * eventTitles.length)];
  const description = eventsDescription[Math.floor(Math.random() * eventsDescription.length)];
  const activity_group_code =
    activityGroupeCodes[Math.floor(Math.random() * activityGroupeCodes.length)];
  const subject = subject_code[Math.floor(Math.random() * subject_code.length)];
  const startHour = Math.floor(Math.random() * 9) + 8; // 8 AM to 4 PM
  const startMinute = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, or 45 minutes
  const durationHours = Math.floor(Math.random() * 3) + 1; // 1 to 3 hours

  const start = new Date(date);
  start.setHours(startHour, startMinute, 0, 0);
  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

  return {
    id,
    title,
    subject_code: subject,
    activity_group_code,
    date: date.toISOString().split('T')[0],
    color: getRandomColor(),
    start: start.toISOString(),
    end: end.toISOString(),
    description,
    staff: staff[Math.floor(Math.random() * staff.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
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
      const numberOfEvents = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < numberOfEvents; i++) {
        events.push(generateRandomEvent(new Date(year, month, day)));
      }
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
