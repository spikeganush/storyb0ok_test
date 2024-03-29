import { cn } from '../../../utils/helper';
import Image from 'next/image';
import React from 'react';
import { TCardProps } from './type';

const Card = ({ imgUrl, showImg = true, title, content, ctaText, ctaUrl }: TCardProps) => {
  return (
    <div className="bg-white before:left-0 before:top-0 before:row-[1/2] before:mb-10 before:inline-block before:h-1 before:w-20 before:bg-acu-red-120 before:content-[''] md:row-[1/6] md:grid md:grid-rows-subgrid">
      {imgUrl && showImg && (
        <Image
          className="row-[2/3] aspect-[7/4] w-full object-cover object-center"
          src={imgUrl}
          alt={title}
          width={700}
          height={400}
          role="img"
        />
      )}
      <h3
        className={cn('row-[3/4] mt-8 text-2xl font-bold text-acu-purple-100', {
          'mt-0': !showImg,
        })}
      >
        {title}
      </h3>
      <p className="row-[4/5] mt-4 text-acu-charcoal-120">{content}</p>
      <a
        href={ctaUrl}
        className="row-[5/6] mt-8  grid w-fit items-center bg-acu-red-100 px-4 py-2 text-sm font-semibold text-white"
        aria-label={ctaText}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default Card;
