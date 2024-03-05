import React from 'react';
import Column from './Column';
import { ColumnsCtaProps } from './type';

const ColumnsCta = (props: ColumnsCtaProps) => {
  const {
    topSeparator = true,
    bottomSeparator = true,
    title,
    columns,
    cta,
  } = props;
  return (
    <div className='container mx-auto px-5 cta-3__column text-left relative py-[4.375rem]'>
      {topSeparator && (
        <div className='absolute h-[1px] bg-gray-400 left-5 right-5 top-0' />
      )}
      <h2 className='text-4xl text-acu-purple-100 font-bold'>{title}</h2>
      <div className='flex flex-wrap flex-col md:flex-row cards-container pb-0 pt-4'>
        {columns.map((column, index) => (
          <>
            <Column key={index} {...column} />
          </>
        ))}
      </div>
      {cta && (
        <div className='flex justify-start mt-12'>
          <a
            href={cta.url}
            rel='noreferrer'
            target='_blank'
            className='cta--right-arrow text-acu-red-100 font-semibold'
          >
            {cta.text}
          </a>
        </div>
      )}
      {bottomSeparator && (
        <div className='absolute h-[1px] bg-gray-400 left-5 right-5 bottom-0' />
      )}
    </div>
  );
};

export default ColumnsCta;
