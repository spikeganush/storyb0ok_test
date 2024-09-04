import type { Config } from 'tailwindcss';
import { COLOURS, SCHEDULE_ADDITIONAL_COLOURS, TailwindContent } from './src/app/utils/constants';
const plugin = require('tailwindcss/plugin');
const containerQuery = require('@tailwindcss/container-queries');
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...COLOURS, ...SCHEDULE_ADDITIONAL_COLOURS },
      fontFamily: {
        miller: ['Miller Font', 'serif'],
        icons: ['Icons', 'sans-serif'],
        'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      content: TailwindContent,
      transitionProperty: {
        height: 'height',
      },
      boxShadow: {
        accordion: '0.1rem 0.1rem 0.5rem rgba(0,0,0,0.1)',
      },
      gridTemplateColumns: {
        'unit-info': '7rem auto 5rem',
      },
    },
  },
  safelist: [
    'font-miller',
    {
      pattern: /(bg|text|border)-(acu)-/,
    },
    {
      pattern: /(icon)-/,
    },
    ...Object.keys(SCHEDULE_ADDITIONAL_COLOURS).map((color) => `bg-${color}`),
  ],
  plugins: [
    containerQuery,
    plugin(function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const content = theme('content') || {};
      const iconFontFamily = theme('fontFamily.icons') || 'Icons';

      const newUtilities = Object.keys(content).reduce((acc: any, key: string) => {
        acc[`.icon-${key}::before`] = {
          '--tw-content': content[key],
          content: 'var(--tw-content)',
          fontFamily: iconFontFamily,
        };
        acc[`.icon-after-${key}::after`] = {
          '--tw-content': content[key],
          content: 'var(--tw-content)',
          fontFamily: iconFontFamily,
        };
        return acc;
      }, {});

      addUtilities(newUtilities, ['before', 'after']);
    }),
  ],
};
export default config;
