import React from 'react';
import Column from './Column';
import { ColumnsCtaProps } from './type';
import ButtonCTA from '../Buttons/CTA';
import ColumnCtaTitle from './ColumnCtaTitle';

const ColumnsCta = (props: ColumnsCtaProps) => {
  const { topSeparator = true, bottomSeparator = true, title, columns, cta } = props;
  return (
    <section className="container relative mx-auto px-5 py-[4.375rem] @container/main">
      {topSeparator && <div className="absolute left-5 right-5 top-0 h-[1px] bg-gray-400" />}
      <ColumnCtaTitle {...title} />
      <div className="flex flex-col flex-wrap pb-0 pt-4 @container @[728px]/main:flex-row">
        {columns.map((column, index) => (
          <>
            <Column key={index} {...column} />
          </>
        ))}
      </div>
      {cta && (
        <div className="mt-12 flex justify-start">
          <ButtonCTA url={cta.url} text={cta.text} />
        </div>
      )}
      {bottomSeparator && <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gray-400" />}
    </section>
  );
};

export default ColumnsCta;
