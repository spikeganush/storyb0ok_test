import { useState, useEffect, useRef, useCallback } from 'react';
import { TCardCarousel } from '../Cards/Carousel/CardCarousel';
import { handleEventAndBlur } from '../../utils/helper';

type UseCarouselParams = {
  cards: TCardCarousel[];
  tagsAll?: boolean;
};

export const useCarousel = ({ cards, tagsAll = false }: UseCarouselParams) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
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

  const handleSelectChange = (tag: string) => {
    setCurrentIndex(0);
    setSelectedTag(tag);
  };

  const handleMouseDown = useCallback(
    (
      e:
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current!.offsetLeft);
      setCurrentTranslate(translateX);
    },
    [translateX],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement> | React.TouchEvent<HTMLAnchorElement>) => {
      const touch = e.touches[0];
      console.log(e);
      setIsDragging(true);
      setStartX(touch.pageX - carouselRef.current!.offsetLeft);
      setCurrentTranslate(translateX);
    },
    [translateX],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement> | React.TouchEvent<HTMLAnchorElement> | TouchEvent) => {
      e.preventDefault();
      if (!isDragging) return; // Only proceed if a drag operation is active
      const touch = e.touches[0]; // Get the first touch point
      const moveTranslate =
        currentTranslate - (touch.pageX - carouselRef.current!.offsetLeft - startX);
      setTranslateX(moveTranslate); // Update the translateX state to move the carousel
    },
    [isDragging, currentTranslate, startX],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX - carouselRef.current!.offsetLeft;
      const moveTranslate = currentTranslate - (x - startX);
      setTranslateX(moveTranslate);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none'; // Disable text selection
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('touchmove', (e) => handleTouchMove(e));
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('touchmove', (e) => handleTouchMove(e));
      document.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleTouchMove, handleTouchEnd]);

  return {
    tags,
    buttonTagsRef,
    handleTagClick,
    selectedTag,
    handleSelectChange,
    buttonProps,
    handleMouseDown,
    handleTouchStart,
    isDragging,
    translateX,
    carouselRef,
    filteredCards,
    visibleCards,
  };
};
