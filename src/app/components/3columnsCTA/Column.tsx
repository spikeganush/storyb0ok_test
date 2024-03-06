import Image from 'next/image';
import React from 'react';
import { ColumnProps } from './type';

const Column = (props: ColumnProps) => {
  const { position, img, title, titleBold, subtitle, subtitleBold } = props;
  return (
    <div
      className={`flex flex-1 flex-col flex-wrap content-start ${
        position === 'left'
          ? 'md:content-start'
          : position === 'center'
            ? 'relative md:content-center'
            : 'md:content-end'
      } mb-6 md:mb-0`}
    >
      {position === 'center' && (
        <div className="absolute left-0 top-0 hidden h-full w-[1px] bg-gray-400  @[728px]:left-[-1.25rem] @[1200px]:left-[-3.25rem] md:inline" />
      )}
      <div className="card-wrapper">
        <Image src={img} alt="Icon" width={107} height={107} className="mb-8" />
        <h3
          className={`text-[2.025rem] text-acu-purple-100 ${titleBold ? 'font- ' : 'font-bold'} w-full text-wrap @[728px]:w-min @[1200px]:w-full`}
        >
          {title}
        </h3>
        <p className={`${subtitleBold ? 'text-2xl font-bold text-acu-purple-100' : 'text-base'}`}>
          {subtitle}
        </p>
      </div>
      {position === 'center' && (
        <div className="absolute right-0 top-0 hidden h-full w-[1px] bg-gray-400 @[1075px]:right-[-1.25rem] @[1200px]:right-[-2.25rem] md:inline" />
      )}
    </div>
  );
};

export default Column;
