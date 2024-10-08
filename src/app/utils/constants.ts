import { ColorKey } from '../components/Schedule/ColorKeyModal';
import { tailwindIcon } from './tailwindIcon';

type AcuRedShades = 120 | 100 | 80 | 60 | 40 | 20;
type AcuPurpleShades = 120 | 115 | 100 | 80 | 60 | 40 | 20;
type AcuBlackShades = 80 | 40 | 30 | 20 | 15 | 10;
type AcuCharcoalShades = 120 | 100;
type AcuYellowShades = 100;

export type AcuColours = {
  'acu-red': Record<AcuRedShades, ValueOf<(typeof COLOURS)['acu-red']>>;
  'acu-purple': Record<AcuPurpleShades, ValueOf<(typeof COLOURS)['acu-purple']>>;
  'acu-charcoal': Record<AcuCharcoalShades, ValueOf<(typeof COLOURS)['acu-charcoal']>>;
  'acu-black': Record<AcuBlackShades, ValueOf<(typeof COLOURS)['acu-black']>>;
  'acu-stone': ValueOf<(typeof COLOURS)['acu-stone']>;
  'acu-sand': ValueOf<(typeof COLOURS)['acu-sand']>;
  'acu-white': ValueOf<(typeof COLOURS)['acu-white']>;
  'acu-gold': ValueOf<(typeof COLOURS)['acu-gold']>;
  'acu-yellow': Record<AcuYellowShades, ValueOf<(typeof COLOURS)['acu-yellow']>>;
} & {
  [K in keyof typeof SCHEDULE_ADDITIONAL_COLOURS]: ValueOf<(typeof SCHEDULE_ADDITIONAL_COLOURS)[K]>;
};

export const SCHEDULE_ADDITIONAL_COLOURS = {
  'acu-schedule-light-blue': '#00cece',
  'acu-schedule-orange': '#f96400',
  'acu-schedule-light-green': '#5be516',
  'acu-schedule-dark-purple': '#b30900',
  'acu-schedule-dark-megenta': '#b30900',
  'acu-schedule-blue': '#0080ff',
  'acu-schedule-olive': '#808000',
  'acu-schedule-green': '#0c763c',
};

export const COLOURS = {
  'acu-red': {
    120: '#d00a00',
    100: '#ed0c00',
    80: '#f15047',
    60: '#f57c75',
    40: '#f8a7a3',
    20: '#fcd3d1',
  },
  'acu-purple': {
    120: '#260B34',
    115: '#2d0c3e',
    100: '#3c1053',
    80: '#643075',
    60: '#8a7098',
    40: '#b19fba',
    20: '#d8cfdd',
  },
  'acu-charcoal': {
    120: '#252320',
    100: '#3d3935',
  },
  'acu-black': {
    80: '#6c6c6c',
    40: '#cccccc',
    30: '#e3e3e3',
    20: '#eeeeee',
    15: '#f6f6f6',
    10: '#fafafa',
  },
  'acu-stone': '#8c857b',
  'acu-sand': '#e8e3db',
  'acu-white': '#ffffff',
  'acu-gold': '#ad915d',
  'acu-yellow': {
    100: '#F2BB0A',
  },
  ...SCHEDULE_ADDITIONAL_COLOURS,
} as const;

// Utility type to extract the literal values
type ValueOf<T> = T extends Record<any, infer V> ? V : T;

export type ColoursObject = typeof COLOURS;

type ExtractColourValues<T> = T extends Record<any, any> ? ValueOf<T> : T;

// Define ColoursType as the union of literal values
export type HexColoursValue = ExtractColourValues<ColoursObject[keyof ColoursObject]>;

export const contentMarginBottom = 40;

export const TailwindContent = tailwindIcon;

export const IntroductionData = {
  title: [
    COLOURS['acu-charcoal']['100'],
    COLOURS['acu-charcoal']['120'],
    COLOURS['acu-purple']['100'],
    COLOURS['acu-purple']['120'],
  ],
  text: [COLOURS['acu-charcoal']['100'], COLOURS['acu-charcoal']['120']],
  alert: [COLOURS['acu-red']['100'], COLOURS['acu-red']['120']],
};

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const daysOfWeekFull: string[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const colorKeys: ColorKey[] = [
  { color: 'bg-acu-red-100', label: 'Due today (Red)' },
  { color: 'bg-acu-schedule-light-blue', label: 'Lecture (light blue)' },
  { color: 'bg-acu-schedule-orange', label: 'Tutorial (orange)' },
  { color: 'bg-acu-schedule-light-green', label: 'Practical (light green)' },
  { color: 'bg-acu-schedule-dark-purple', label: 'Seminar (dark purple)' },
  { color: 'bg-acu-schedule-dark-megenta', label: 'Intensive (dark megenta)' },
  { color: 'bg-acu-schedule-blue', label: 'Workshop (blue)' },
  { color: 'bg-acu-schedule-olive', label: 'Exams (olive)' },
  { color: 'bg-acu-schedule-green', label: 'Study session or conference (green)' },
  { color: 'bg-acu-purple-100', label: 'Social event or careers workshop (purple)' },
  { color: 'bg-acu-charcoal-100', label: 'Sport (charcoal)' },
];
