import Image from 'next/image';
import React from 'react';
import { ColumnProps } from './type';

const Column = (props: ColumnProps) => {
  const { position, img, title, subtitle } = props;
  return (
    <div
      className={`flex flex-col flex-1 flex-wrap content-start ${
        position === 'left'
          ? 'md:content-start'
          : position === 'center'
            ? 'md:content-center relative'
            : 'md:content-end'
      } mb-6 md:mb-0`}
    >
      {position === 'center' && (
        <div className='absolute w-[1px] h-full bg-gray-400 left-0 min-[1200px]:left-[-3.25rem] min-[1075px]:left-[-1.25rem] top-0 hidden md:inline-flex' />
      )}
      <Image src={img} alt='Icon' width={107} height={107} className='mb-8' />
      <h3 className='text-4xl text-acu-purple-100 font-bold'>{title}</h3>
      <p className='text-base'>{subtitle}</p>
      {position === 'center' && (
        <div className='absolute w-[1px] h-full bg-gray-400 right-0 min-[1200px]:right-[-2.25rem] min-[1075px]:right-[-1.25rem] top-0 hidden md:inline-flex' />
      )}
    </div>
  );
};

export default Column;
