import React from 'react';
import ColoursWatch from './ColoursWatch';
import { COLOURS } from '@/app/utils/constants';
import { nameColours } from '@/app/utils/helper';

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
  component: ColoursWatch,
  tags: ['autodocs'],
};

export const ColorPalette = () => (
  <div className="p-8">
    {Object.entries(COLOURS).map(([name, value]) => {
      // Render each color group on its own line
      return (
        <div key={name} className="my-4 flex flex-row items-center">
          <h2 className="mr-4 w-[150px] text-lg font-bold">{name}:</h2>
          <div className="flex">
            {typeof value === 'object' ? (
              Object.entries(value).map(([shade, colour]) => (
                <ColoursWatch key={`${name}-${shade}`} name={`${name}-${shade}`} colour={colour} />
              ))
            ) : (
              <ColoursWatch key={name} name={name} colour={value} />
            )}
          </div>
        </div>
      );
    })}
  </div>
);
