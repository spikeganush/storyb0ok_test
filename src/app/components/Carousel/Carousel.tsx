import { cn } from '../../utils/helper';
import React, { useState, useEffect, useRef } from 'react';
import CardCarousel, { TCardCarousel } from '../Cards/Carousel/CardCarousel';

export type TCarouselProps = {
  cards: TCardCarousel[];
  title?: string;
};

const Carousel = (props: TCarouselProps) => {
  const { cards, title } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // This function updates the number of visible cards based on screen size
  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width < 640)
      setVisibleCards(1); // sm breakpoint
    else if (width < 768)
      setVisibleCards(2); // md breakpoint
    else if (width < 1024)
      setVisibleCards(3); // lg breakpoint
    else setVisibleCards(4); // xl breakpoint
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Navigation functions will go here
  const navigate = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction * visibleCards;
      // Prevent navigating beyond the start and end of the cards array
      newIndex =
        cards && cards.length && Math.max(0, Math.min(newIndex, cards.length - visibleCards));
      return newIndex;
    });
  };

  const updateTranslateX = () => {
    if (carouselRef.current) {
      // Get the computed style of the carousel container
      const computedStyle = getComputedStyle(carouselRef.current);

      // Calculate the total horizontal padding (left + right)
      const horizontalPadding =
        parseInt(computedStyle.paddingLeft, 10) + parseInt(computedStyle.paddingRight, 10);

      // Use the container's offsetWidth minus the horizontal padding to get the available width for cards
      const containerWidth = carouselRef.current.offsetWidth - horizontalPadding;

      const gapSize = parseInt(computedStyle.gap, 10);
      const cardWidth = (containerWidth - gapSize * (visibleCards - 1)) / visibleCards;
      const totalTranslateX = (cardWidth + gapSize) * currentIndex;

      setTranslateX(totalTranslateX);
    }
  };

  useEffect(() => {
    updateTranslateX();
    // Adding an event listener for window resize to recalculate on resize
    const handleResize = () => updateTranslateX();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, visibleCards]);

  const Button = ({ direction }: { direction: 'prev' | 'next' }) => {
    return (
      <button
        type="button"
        onClick={() => navigate(direction === 'prev' ? -1 : 1)}
        className={cn(
          'dotted-focus absolute z-10 row-[1/2] flex aspect-square w-12 items-center justify-center rounded-[50%] bg-acu-red-100 text-acu-white',
          {
            'rotate-180': direction === 'next',
            hidden:
              (direction === 'prev' && currentIndex === 0) ||
              (direction === 'next' && currentIndex === (cards && cards.length - visibleCards)),
            '-left-16': direction === 'prev',
            '-right-16': direction === 'next',
          },
        )}
      >
        <svg
          width="26"
          height="46"
          viewBox="0 0 26 46"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className={cn('h-4/6', {
            'mr-2': direction === 'next',
          })}
        >
          <path d="M24.998,40.094c1.338,1.352,1.338,3.541,0,4.893c-1.338,1.35-3.506,1.352-4.846,0L1.004,25.447  c-1.338-1.352-1.338-3.543,0-4.895L20.152,1.014c1.34-1.352,3.506-1.352,4.846,0c1.338,1.352,1.338,3.541,0,4.893L9.295,23  L24.998,40.094z" />
        </svg>
      </button>
    );
  };
  return (
    <div className="container mx-auto">
      <div className="relative flex h-auto w-full items-center">
        <Button direction="prev" />
        <div className="flex w-full items-center justify-center overflow-x-hidden overflow-y-visible">
          <div
            className="flex w-full justify-start gap-[30px] px-2 pt-4 transition-transform duration-500"
            style={{ transform: `translateX(-${translateX}px)` }}
            ref={carouselRef}
          >
            {cards &&
              cards.map((card, index) => (
                <CardCarousel key={index} card={card} visibleCards={visibleCards} />
              ))}
          </div>
        </div>
        <Button direction="next" />
      </div>
    </div>
  );
};

export default Carousel;
