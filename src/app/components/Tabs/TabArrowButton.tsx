import React from 'react';
import { TTab } from './TabsWithBg';
import { cn } from '../../utils/helper';

const TabArrowButton = ({
  tab,
  index,
  isActive,
  onClick,
}: {
  tab: TTab;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}) => {
  const baseButtonClass =
    'relative z-[2] flex h-full w-full items-center justify-center bg-acu-white px-6 py-4 text-acu-charcoal-120 duration-500';
  const activeButtonClass = 'border-r-0 bg-acu-red-100 text-acu-white';
  const arrowClass =
    'absolute bottom-[-10px] left-1/2 z-[1] aspect-square w-5 rotate-45 bg-acu-red-100 shadow-[0_0.1rem_0.5rem_rgba(0,0,0,0.2)]';

  return (
    <div className={cn('relative flex-1 border-r border-acu-black-40 last-of-type:border-r-0')}>
      <button
        type="button"
        className={cn(baseButtonClass, {
          [activeButtonClass]: isActive,
        })}
        onClick={() => onClick(index)}
      >
        <h3>{tab.title}</h3>
      </button>
      <div
        className={cn(arrowClass, {
          hidden: !isActive,
        })}
      />
    </div>
  );
};

export default TabArrowButton;
