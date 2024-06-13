import { cn } from '@/app/utils/helper';
import React from 'react';
import { TAskAcuVersion, TLeftColumnProps } from './AskAcu';

const AskAcuLeftCol = ({
  leftColumn: { title, paragraphs },
  version,
}: {
  leftColumn: TLeftColumnProps;
  version: TAskAcuVersion;
}) => {
  return (
    <div className="w-full md:w-1/3">
      <h1 className="mb-4 text-[2.625rem] font-bold leading-none md:mb-16">{title}</h1>
      <div
        className={cn('text-acu-purple-20', {
          'text-acu-charcoal-120': version !== 'purple',
        })}
      >
        {paragraphs.map((paragraph, index) => {
          return (
            <p key={index} className={cn(paragraph.customStyle)}>
              {paragraph.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AskAcuLeftCol;
