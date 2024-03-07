import React from 'react';

// Define your color palette as in your Tailwind config
const colors = {
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
};

const ColorSwatch = ({ name, color }: { name: string; color: string }) => (
  <div className="m-4 flex flex-col items-center">
    <div className="h-24 w-24" style={{ backgroundColor: color }}></div>
    <p className="mt-2 text-sm">{name}</p>
    <p className="text-xs">{color}</p>
  </div>
);

export default {
  title: 'Design System/Colours',
  // Description of the component
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The color palette used in the ACU Design System.',
      },
    },
  },
  component: ColorSwatch,
  tags: ['autodocs'],
};

export const ColorPalette = () => (
  <div className="p-8">
    {Object.entries(colors).map(([name, value]) => {
      // Render each color group on its own line
      return (
        <div key={name} className="my-4 flex flex-row items-center">
          <h2 className="mr-4 w-[150px] text-lg font-bold">{name}:</h2>
          <div className="flex">
            {typeof value === 'object' ? (
              Object.entries(value).map(([shade, color]) => (
                <ColorSwatch key={`${name}-${shade}`} name={`${name}-${shade}`} color={color} />
              ))
            ) : (
              <ColorSwatch key={name} name={name} color={value} />
            )}
          </div>
        </div>
      );
    })}
  </div>
);
