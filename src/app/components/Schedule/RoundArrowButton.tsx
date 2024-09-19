import React from 'react';
import { cn } from '@/app/utils/helper';

type RoundArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const RoundArrowButton: React.FC<RoundArrowButtonProps> = ({ direction, onClick }) => (
  <button
    className={cn(
      `flex aspect-square w-6 items-center justify-center rounded-full border border-acu-red-100 text-xs text-acu-red-100 icon-acu-arrow_right`,
      {
        'rotate-180': direction === 'left',
      },
    )}
    onClick={onClick}
  ></button>
);
