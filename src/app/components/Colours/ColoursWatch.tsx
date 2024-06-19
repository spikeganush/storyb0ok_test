import { cn } from '@/app/utils/helper';
import React from 'react';

const ColoursWatch = ({ name, colour }: { name: string; colour: string }) => {
  return (
    <div className="m-4 flex flex-col items-center">
      <div
        className={cn('h-24 w-24', {
          'border border-acu-charcoal-120': name === 'acu-white',
        })}
        style={{ backgroundColor: colour }}
      ></div>
      <p className="mt-2 text-sm">{name}</p>
      <p className="text-xs">{colour}</p>
    </div>
  );
};

export default ColoursWatch;
