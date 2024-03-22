import { cn } from '../../../utils/helper';
import Image from 'next/image';
import React from 'react';

export type TCardCarousel = {
  tag: string;
  imgUrl: string;
  title: string;
  subtitle?: string;
  date: string;
  content: string;
  url: string;
};

export type TCardCarouselProps = {
  card: TCardCarousel;
  visibleCards: number;
};

const CardCarousel = ({ card, visibleCards }: TCardCarouselProps) => {
  const { tag, imgUrl, title, subtitle, date, content, url } = card;

  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default action (dragging images or following links)
    e.stopPropagation(); // Stop the event from propagating to the carousel's onMouseDown handler
  };

  return (
    <a
      onMouseDown={handleMouseDown}
      href={url}
      className={cn(
        'relative top-0 mb-8 flex-none shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)] transition-[top] duration-300 hover:-top-4',
        {
          'w-full': visibleCards === 1,
          'w-[calc(50%-15px)]': visibleCards === 2,
          'w-[calc(33.3333333%-20px)]': visibleCards === 3,
          'w-[calc(25%-22.5px)]': visibleCards === 4,
        },
      )}
    >
      <div className="relative">
        <span
          className="absolute left-0 top-0 bg-acu-red-100 py-[6px] pl-5 pr-10 text-acu-white
[clip-path:polygon(0_0,100%_0,calc(100%-2.5rem)_100%,0%_100%)]"
        >
          {tag}
        </span>
        <Image
          src={imgUrl}
          alt={title}
          width={262}
          height={160}
          className="aspect-[131/80] w-full object-cover"
        />
        {subtitle && (
          <span className="absolute bottom-0 left-0 w-full bg-acu-purple-100 bg-opacity-75 px-4 py-1 font-bold text-acu-white">
            {subtitle}
          </span>
        )}
      </div>
      <div className="p-4">
        <h1 className="mb-1 font-bold text-acu-charcoal-120">{title}</h1>
        <small>{date}</small>
        <p className="mt-2">{content}</p>
      </div>
    </a>
  );
};

export default CardCarousel;
