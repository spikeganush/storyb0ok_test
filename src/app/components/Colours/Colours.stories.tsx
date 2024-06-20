import React from 'react';
import ReturnColours from './ColoursWatch';
import { COLOURS } from '@/app/utils/constants';

export default {
  title: 'Design System/Palette separate colours',
  // Description of the component
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The color palette used in the ACU Design System.',
      },
    },
  },
  component: ReturnColours,
  tags: ['autodocs'],
};

export const ColourPalette = () => (
  <div className="p-8">
    {Object.entries(COLOURS).map(([name, value]) => {
      // Render each color group on its own line
      return (
        <div key={name} className="my-4 flex flex-row items-center">
          <h2 className="mr-4 w-[150px] text-lg font-bold">{name}:</h2>
          <div className="flex">
            {typeof value === 'object' ? (
              Object.entries(value).map(([shade, colour]) => (
                <ReturnColours key={colour} colour={colour} />
              ))
            ) : (
              <ReturnColours key={value} colour={value} />
            )}
          </div>
        </div>
      );
    })}
  </div>
);
