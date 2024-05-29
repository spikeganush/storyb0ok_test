import React from 'react';
import { TOneColumnHalfProps } from './OneColumnHalf';
import Links from '@/app/components/Links/Links';

const OneColumnCard = ({ title, paragraphs, link }: TOneColumnHalfProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-acu-purple-100">{title}</h1>
      {paragraphs?.length > 0 &&
        paragraphs.map((paragraph, index) => (
          <p key={index} className="pt-4 text-[1.25rem] text-acu-purple-100">
            {paragraph}
          </p>
        ))}
      {link && (
        <Links
          text={link.text}
          url={link.url}
          colours="text-acu-red-100"
          style="mt-4"
          type="arrow"
        />
      )}
    </>
  );
};

export default OneColumnCard;
