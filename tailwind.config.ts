import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
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
          15: '#f6f6f6', // ACU background
          10: '#fafafa',
        },
        'acu-stone': '#8c857b',
        'acu-sand': '#e8e3db',
        'acu-white': '#ffffff',
        'acu-yellow': {
          100: '#F2BB0A', // ACU Online
        },
      },
      fontFamily: {
        miller: ['Miller Font', 'serif'],
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
export default config;
