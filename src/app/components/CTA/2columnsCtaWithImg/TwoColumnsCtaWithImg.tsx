import Image from 'next/image';
import React from 'react';
import ButtonCTA from '../../Buttons/CTA';
import { cn } from '../../../utils/helper';
import { TwoColumnsCtaWithImgProps } from './type';

const TwoColumnsCtaWithImg = ({
  topSeparator = true,
  bottomSeparator = true,
  imageUrl,
  title,
  titleColor,
  description,
  descriptionColor,
  ctaUrl,
  ctaText,
}: TwoColumnsCtaWithImgProps) => {
  return (
    <div className="w-full px-5 @container">
      <div className="relative flex flex-col px-5 py-[4.375rem] md:flex-row">
        {topSeparator && <div className="absolute left-5 right-5 top-0 h-[1px] bg-gray-400" />}
        <div className="w-full md:w-1/2">
          <Image
            alt="Decoration image"
            src={imageUrl}
            className="w-full"
            width={640}
            height={400}
          />
        </div>
        <div
          className="h-full w-full bg-gray-100 p-4 md:w-1/2 md:p-10"
          style={{
            clipPath: 'polygon(100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%, 0 0',
          }}
        >
          <h1
            className={cn(
              'mb-4 text-5xl font-bold text-acu-purple-100 @[940px]:max-w-[5ch]',
              titleColor,
            )}
          >
            {title}
          </h1>
          <p className={cn('font-semibold text-acu-black-80 @[940px]:w-4/5', descriptionColor)}>
            {description}
          </p>
          <ButtonCTA text={ctaText} url={ctaUrl} type="arrow" />
        </div>
        {bottomSeparator && (
          <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gray-400" />
        )}
      </div>
    </div>
  );
};

export default TwoColumnsCtaWithImg;
