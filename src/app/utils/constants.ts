export type ColorShades = {
  [shade: number]: string;
};

export type AcuColors = {
  [colorName: string]: ColorShades | string;
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
