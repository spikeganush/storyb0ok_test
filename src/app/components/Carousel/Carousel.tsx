import { cn, handleEventAndBlur } from '../../utils/helper';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import CardCarousel, { TCardCarousel } from '../Cards/Carousel/CardCarousel';
import Button from './CarouselButtons';
import CarouselDropdown from './CarouselDropdown';

export type TCarouselProps = {
  cards: TCardCarousel[];
  title?: string;
  tagsAll?: boolean;
};

const Carousel = (props: TCarouselProps) => {
  const { cards, title, tagsAll = false } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(tagsAll ? 'All tags' : null);
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

  useEffect(() => {
    // @ts-ignore
    let updatedTags = [...new Set(cards.map((card) => card.tag))];
    if (tagsAll) {
      updatedTags = ['All tags', ...updatedTags];
    }
    setTags(updatedTags);
  }, [cards, tagsAll]);

  const updateTranslateX = useCallback(() => {
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
  }, [currentIndex, visibleCards]);

  useEffect(() => {
    updateTranslateX();
    // Adding an event listener for window resize to recalculate on resize
    const handleResize = () => updateTranslateX();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, visibleCards]);

  const filteredCards =
    selectedTag === 'All tags' || selectedTag === null
      ? cards
      : cards.filter((card) => card.tag === selectedTag);

  const buttonProps = {
    currentIndex,
    cards: filteredCards,
    visibleCards,
    setCurrentIndex,
  };

  const buttonTagsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleTagClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>,
    index: number,
    tag: string,
  ) => {
    const buttonRef = buttonTagsRef.current[index];
    handleEventAndBlur(e, { current: buttonRef }, () => {
      setCurrentIndex(0);
      setSelectedTag(tag);
    });
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIndex(0);
    setSelectedTag(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4 flex w-full flex-wrap items-center justify-between px-2">
        {title && <h2 className="text-[2.625rem] font-bold text-acu-purple-100">{title}</h2>}
        <div className="hidden gap-2 md:flex">
          {tags &&
            tags.map((tag, index) => (
              <button
                ref={(element) => (buttonTagsRef.current[index] = element)}
                key={index}
                onMouseDown={(e) => handleTagClick(e, index, tag)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
                    handleTagClick(e, index, tag);
                  }
                }}
                className={cn(
                  'dotted-focus border border-acu-red-100 px-4 py-2 text-sm font-bold text-acu-red-100',
                  selectedTag === tag ? 'bg-acu-red-100 text-acu-white' : 'bg-acu-gray-100',
                )}
              >
                {tag}
              </button>
            ))}
        </div>
        <CarouselDropdown tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      </div>
      <div className="relative flex h-auto w-full items-center">
        <Button {...buttonProps} direction="prev" />
        <div className="flex w-full items-center justify-center overflow-x-hidden overflow-y-visible">
          <div
            className="flex w-full justify-start gap-[30px] px-2 pt-4 transition-transform duration-500"
            style={{ transform: `translateX(-${translateX}px)` }}
            ref={carouselRef}
          >
            {filteredCards &&
              filteredCards.map((card, index) => (
                <CardCarousel key={index} card={card} visibleCards={visibleCards} />
              ))}
          </div>
        </div>
        <Button {...buttonProps} direction="next" />
      </div>
    </div>
  );
};

export default Carousel;
