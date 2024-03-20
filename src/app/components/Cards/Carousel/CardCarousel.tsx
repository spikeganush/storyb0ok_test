import Image from 'next/image';
import React from 'react';

export type TCardCarousel = {
  tag: string;
  imgUrl: string;
  title: string;
  date: string;
  content: string;
  url: string;
};

export type TCardCarouselProps = {
  card: TCardCarousel;
  visibleCards: number;
};

const CardCarousel = ({ card, visibleCards }: TCardCarouselProps) => {
  const { tag, imgUrl, title, date, content, url } = card;
  return (
    <a
      href={url}
      className={`relative top-0 mb-8 flex-none shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)] transition-[top] duration-300 hover:-top-4 ${visibleCards === 1 ? 'w-full' : visibleCards === 2 ? 'w-[calc(50%-15px)]' : visibleCards === 3 ? 'w-[calc(33.3333333%-20px)]' : 'w-[calc(25%-22.5px)]'}`}
    >
      <span
        className="absolute left-0 top-0 bg-acu-red-100 py-[6px] pl-5 pr-10 text-acu-white
[clip-path:polygon(0_0,100%_0,calc(100%-2.5rem)_100%,0%_100%)]"
      >
        {tag}
      </span>
      <Image src={imgUrl} alt={title} width={262} height={160} className="aspect-[131/80] w-full" />
      <div className="p-4">
        <h1 className="font-semibold text-acu-charcoal-120">{title}</h1>
        <small>{date}</small>
        <p>{content}</p>
      </div>
    </a>
  );
};

export default CardCarousel;
