import React from 'react';
import { cn } from '../../../utils/helper';
import { TTabArrowButtonProps } from './type';

const TabArrowButton = ({
  tab,
  index,
  activeTabIndex,
  divHeight,
  isMobile,
  onClick,
}: TTabArrowButtonProps) => {
  const isActive = activeTabIndex === index;
  return (
    <div
      className={cn(
        'relative mb-0 border-b border-acu-black-40 duration-500 last-of-type:border-b-0 @[600px]:flex-1 @[600px]:border-b-0 @[600px]:border-r @[600px]:last-of-type:border-r-0',
        {
          'last-of-type:border-b': isActive && isMobile,
          'border-t': isMobile && activeTabIndex === index - 1 && activeTabIndex !== -1,
        },
      )}
      style={{
        marginBottom: isMobile ? (isActive ? divHeight : 0) : 0,
      }}
      aria-selected={isActive}
    >
      <button
        type="button"
        className={cn(
          'acu-focus relative z-[2] flex h-full w-full items-center bg-acu-white px-6 py-4 text-acu-charcoal-120 duration-500 @[600px]:justify-center',
          {
            'border-r-0 @[600px]:bg-acu-red-100 @[600px]:text-acu-white': isActive,
          },
        )}
        onClick={() => onClick(index)}
      >
        <h3>{tab.title}</h3>
      </button>
      <div
        className={cn(
          'absolute bottom-auto right-4 top-1/2 z-[3] block h-4 w-4 -translate-y-1/2 rotate-[225deg] border-b-2 border-r-2 border-acu-black-80 duration-500 @[600px]:bottom-[-10px] @[600px]:left-1/2 @[600px]:top-auto @[600px]:z-[1]  @[600px]:aspect-square @[600px]:h-auto @[600px]:w-5 @[600px]:translate-y-0 @[600px]:rotate-45 @[600px]:border-0 @[600px]:bg-acu-red-100 @[600px]:shadow-[0_0.1rem_0.5rem_rgba(0,0,0,0.2)]',
          {
            'rotate-45 @[600px]:hidden @[600px]:rotate-0': !isActive,
          },
        )}
      />
    </div>
  );
};

export default TabArrowButton;
