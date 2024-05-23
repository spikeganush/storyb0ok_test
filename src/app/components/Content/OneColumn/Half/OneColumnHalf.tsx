import React from 'react';
import Links from '../../../Links/Links';

export type TOneColumnHalfProps = {
  title: string;
  paragraphs: string[];
  link?: {
    url: string;
    text: string;
  };
};

const OneColumnHalf = ({ title, paragraphs, link }: TOneColumnHalfProps) => {
  return (
    <div className="w-1/2">
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
    </div>
  );
};

export default OneColumnHalf;
