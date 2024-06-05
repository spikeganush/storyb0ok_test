import Image from 'next/image';
import React from 'react';
import { ColumnProps } from './type';

const Column = (props: ColumnProps) => {
  const { position, img, title, titleBold, subtitle, subtitleBold } = props;
  return (
    <div
      className={`flex flex-1 flex-col flex-wrap content-start ${
        position === 'left'
          ? '@[728px]/main:content-start'
          : position === 'center'
            ? 'relative @[728px]/main:content-center'
            : '@[728px]/main:content-end'
      } mb-6 @[728px]/main:mb-0`}
    >
      {position === 'center' && (
        <div className="absolute left-0 top-0 hidden h-full w-[1px] bg-gray-400  @[728px]/main:inline @[728px]:left-[-1.25rem] @[1200px]:left-[-3.25rem]" />
      )}
      <div className="card-wrapper">
        <Image src={img} alt="Icon" width={107} height={107} className="mb-8" />
        <h3
          className={`text-[2.025rem] text-acu-purple-100 ${titleBold ? 'font-extrabold' : 'font-bold @[728px]:w-min @[1200px]:w-full'} w-full text-wrap `}
        >
          {title}
        </h3>
        {subtitleBold ? (
          <h4 className={`text-[2.025rem] font-bold text-acu-purple-100`}>{subtitle}</h4>
        ) : (
          <p className={`max-w-[24ch] text-base @3xl:max-w-[29ch]`}>{subtitle}</p>
        )}
      </div>
      {position === 'center' && (
        <div className="absolute right-0 top-0 hidden h-full w-[1px] bg-gray-400 @[728px]/main:inline @[1075px]:right-[-1.25rem] @[1200px]:right-[-2.25rem]" />
      )}
    </div>
  );
};

export default Column;
