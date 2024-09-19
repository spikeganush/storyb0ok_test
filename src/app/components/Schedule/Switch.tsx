import { cn } from '@/app/utils/helper';
import React from 'react';

const Switch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <div className="h-[30px] w-14 rounded-full bg-gray-200 after:absolute after:left-[4px] after:top-[4px] after:h-[22px] after:w-[22px] after:rounded-full after:bg-acu-white after:transition-all after:content-[''] peer-checked:bg-acu-purple-100 peer-checked:after:translate-x-[26px]">
        <span
          className={cn(
            'absolute right-1.5 top-1/2 -translate-y-1/2 text-xs font-medium text-white opacity-100 transition-opacity',
            {
              'opacity-0': checked,
            },
          )}
        >
          No
        </span>
        <span
          className={cn(
            'absolute left-1.5 top-1/2 -translate-y-1/2 text-xs font-medium text-white opacity-0 transition-opacity',
            {
              'opacity-100': checked,
            },
          )}
        >
          Yes
        </span>
      </div>
    </label>
  );
};

export default Switch;
