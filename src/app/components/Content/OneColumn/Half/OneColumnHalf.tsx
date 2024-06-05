import React from 'react';
import OneColumnCard from './OneColumnCard';

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
      <OneColumnCard title={title} paragraphs={paragraphs} link={link} />
    </div>
  );
};

export default OneColumnHalf;
