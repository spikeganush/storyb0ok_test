import React from 'react';
import { ColumnCtaTitleProps } from './type';
import ButtonCTA from '../../Buttons/CTA';

const ColumnCtaTitle = (title: ColumnCtaTitleProps) => {
  return (
    <>
      {title && (
        <>
          {title.subtitle && (
            <h2
              className={`${title.subtitle ? 'mb-6' : 'mb-2'} text-4xl font-bold text-acu-purple-100`}
            >
              {title.mainTitle}
            </h2>
          )}

          {title.subtitle && (
            <p className="text-acu-gray max-w-[66ch] pb-4 text-base font-normal">
              {title.subtitle}
            </p>
          )}
          {title.cta && (
            <ButtonCTA url={title.cta.url} text={title.cta.text} style="mb-6" type="arrow" />
          )}
        </>
      )}
    </>
  );
};

export default ColumnCtaTitle;
