import { cn } from '../../utils/helper';
import React from 'react';
import CardCarousel, { TCardCarousel } from '../Cards/Carousel/CardCarousel';
import Button from './CarouselButtons';
import CarouselDropdown from './CarouselDropdown';
import { useCarousel } from './useCarousel';

export type TCarouselProps = {
  cards: TCardCarousel[];
  title?: string;
  tagsAll?: boolean;
};

const Carousel = (props: TCarouselProps) => {
  const { cards, title, tagsAll = false } = props;
  const {
    tags,
    buttonTagsRef,
    handleTagClick,
    selectedTag,
    handleSelectChange,
    buttonProps,
    handleDragStart,
    isDragging,
    translateX,
    carouselRef,
    filteredCards,
    visibleCards,
  } = useCarousel({
    cards,
    tagsAll,
  });

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
                onMouseDown={(e) => handleTagClick(tag)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
                    handleTagClick(tag);
                  }
                }}
                className={cn(
                  'acu-focus border border-acu-red-100 px-4 py-2 text-sm font-bold text-acu-red-100',
                  selectedTag === tag ? 'bg-acu-red-100 text-acu-white' : 'bg-acu-gray-100',
                )}
              >
                {tag}
              </button>
            ))}
        </div>
        <CarouselDropdown tags={tags} selectedTag={selectedTag} onSelectTag={handleSelectChange} />
      </div>
      <div className="relative flex h-auto w-full items-center">
        <Button {...buttonProps} direction="prev" />
        <div
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          className={cn(
            'flex w-full items-center justify-center overflow-x-hidden overflow-y-visible',
            {
              'cursor-grab': !isDragging,
              'cursor-grabbing': isDragging,
              'select-none': isDragging,
            },
          )}
        >
          <div
            className={cn(
              'flex w-full justify-start gap-[30px] px-2 pt-4 transition-transform duration-500',
            )}
            style={{ transform: `translateX(${translateX}px)` }}
            ref={carouselRef}
          >
            {filteredCards &&
              filteredCards.map((card, index) => (
                <CardCarousel
                  key={index}
                  card={card}
                  visibleCards={visibleCards}
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                />
              ))}
          </div>
        </div>
        <Button {...buttonProps} direction="next" />
      </div>
    </div>
  );
};

export default Carousel;
