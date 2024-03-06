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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'acu-gray': '#6c6c6c',
        'acu-purple-100': '#3c1053',
        'acu-red-100': '#ed0c00',
        'black-40': 'rgba(0, 0, 0, 0.4)',
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
