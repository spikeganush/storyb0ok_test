import { HexColoursValue } from '@/app/utils/constants';
import { cn, nameColours } from '@/app/utils/helper';
import React from 'react';
import { TCouloursWatchProps } from './type';

const ColoursWatch = ({ name, colour, className }: TCouloursWatchProps) => {
  return (
    <div
      className={cn('m-4 flex flex-col items-center', {
        [className!]: className,
      })}
    >
      <div
        className={cn('aspect-square h-24 rounded-lg', {
          'border border-acu-charcoal-120': name === 'acu-white',
        })}
        style={{ backgroundColor: colour }}
      ></div>
      <p className="mt-2 text-sm">{name}</p>
      <p className="text-xs">{colour}</p>
    </div>
  );
};

const ReturnColours = ({
  colour,
  className,
}: {
  colour: HexColoursValue;
  className?: React.ComponentProps<'div'>['className'];
}) => {
  return <ColoursWatch name={nameColours(colour)!} colour={colour} className={className} />;
};

export default ReturnColours;
