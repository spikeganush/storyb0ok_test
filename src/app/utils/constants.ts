type AcuRedShades = 120 | 100 | 80 | 60 | 40 | 20;
type AcuPurpleShades = 120 | 115 | 100 | 80 | 60 | 40 | 20;
type AcuBlackShades = 80 | 40 | 30 | 20 | 15 | 10;
type AcuCharcoalShades = 120 | 100;
type AcuYellowShades = 100;

export type AcuColors = {
  'acu-red': Record<AcuRedShades, string>;
  'acu-purple': Record<AcuPurpleShades, string>;
  'acu-charcoal': Record<AcuCharcoalShades, string>;
  'acu-black': Record<AcuBlackShades, string>;
  'acu-stone': string;
  'acu-sand': string;
  'acu-white': string;
  'acu-gold': string;
  'acu-yellow': Record<AcuYellowShades, string>;
};

export const COLOURS: AcuColors = {
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
};
