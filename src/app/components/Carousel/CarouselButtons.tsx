import { cn } from '../../utils/helper';
import React, { useRef } from 'react';
import { TCardCarousel } from '../Content/Cards/Carousel/CardCarousel';
import { TButtonProps } from './type';

const Button = ({
  direction,
  currentIndex,
  cards,
  visibleCards,
  setCurrentIndex,
}: TButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction * visibleCards;
      // Prevent navigating beyond the start and end of the cards array
      newIndex =
        cards && cards.length && Math.max(0, Math.min(newIndex, cards.length - visibleCards));
      return newIndex;
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onMouseDown={() => navigate(direction === 'prev' ? -1 : 1)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
          navigate(direction === 'prev' ? -1 : 1);
        }
      }}
      className={cn(
        'acu-focus absolute z-10 flex aspect-square w-12 items-center justify-center rounded-[50%] bg-acu-red-100 text-acu-white',
        {
          'rotate-180': direction === 'next',
          hidden:
            (direction === 'prev' && currentIndex === 0) ||
            (direction === 'next' && currentIndex === (cards && cards.length - visibleCards)) ||
            (cards && cards.length <= visibleCards),
          '-left-5 @[665px]:-left-8 @[690px]:-left-11 @[728px]:-left-5 @[795px]:-left-8 @[816px]:-left-11 @[856px]:-left-16 @[984px]:-left-5 @[1074px]:-left-11 @[1111px]:-left-16 @[1240px]:-left-5 @[1660px]:-left-16':
            direction === 'prev',
          '-right-5 @[665px]:-right-8 @[690px]:-right-11 @[728px]:-right-5 @[795px]:-right-8 @[816px]:-right-11 @[856px]:-right-16 @[984px]:-right-5 @[1074px]:-right-11 @[1111px]:-right-16 @[1240px]:-right-5 @[1660px]:-right-16':
            direction === 'next',
        },
      )}
    >
      <svg
        width="26"
        height="46"
        viewBox="0 0 26 46"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        className={cn('h-3/6', {
          'mr-2': direction === 'next',
        })}
      >
        <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z" />
      </svg>
    </button>
  );
};

export default Button;
