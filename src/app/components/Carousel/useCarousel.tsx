import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TCardCarousel } from '../Cards/Carousel/CardCarousel';
import { handleEventAndBlur } from '../../utils/helper';

type UseCarouselParams = {
  cards: TCardCarousel[];
  tagsAll?: boolean;
};

export const useCarousel = ({ cards, tagsAll = false }: UseCarouselParams) => {
  const threshold = 0.1;
  const friction = 0.95;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(tagsAll ? 'All tags' : null);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const buttonTagsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      setVisibleCards(width < 640 ? 1 : width < 768 ? 2 : width < 1024 ? 3 : 4);
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const tags = tagsAll
      ? ['All tags', ...new Set(cards.map((card) => card.tag))]
      : [...new Set(cards.map((card) => card.tag))];
    setTags(tags);
  }, [cards, tagsAll]);

  const getCardWidth = useCallback(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const computedStyle = getComputedStyle(carousel);
      const horizontalPadding =
        parseInt(computedStyle.paddingLeft, 10) + parseInt(computedStyle.paddingRight, 10);
      const containerWidth = carousel.offsetWidth - horizontalPadding;
      const gapSize = parseInt(computedStyle.gap, 10);
      const cardWidth = (containerWidth - gapSize * (visibleCards - 1)) / visibleCards;
      return { cardWidth, gapSize };
    }
    return { cardWidth: 0, gapSize: 0 };
  }, [visibleCards]);

  const updateTranslateX = () => {
    const { cardWidth, gapSize } = getCardWidth();
    const newTranslateX =
      (cardWidth + gapSize) * currentIndex < 0
        ? (cardWidth + gapSize) * currentIndex
        : (cardWidth + gapSize) * currentIndex * -1;
    setTranslateX(newTranslateX);
  };

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

  const handleTagClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>,
    index: number,
    tag: string,
  ) => {
    handleEventAndBlur(e, { current: buttonTagsRef.current[index] }, () => {
      setCurrentIndex(0);
      setSelectedTag(tag);
    });
  };

  const handleSelectChange = (tag: string) => {
    setCurrentIndex(0);
    setSelectedTag(tag);
  };

  // Initialize dragging state
  const initDrag = useCallback((pageX: number, initialTranslate: number) => {
    setIsDragging(true);
    setStartX(pageX);
    setCurrentTranslate(initialTranslate);
  }, []);

  const handleDragStart = (
    e:
      | React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement | HTMLAnchorElement>,
  ) => {
    if ('touches' in e) {
      const initialPosition = e.touches[0].pageX;
      initDrag(initialPosition, translateX);
    } else {
      const initialPosition = e.pageX;
      initDrag(initialPosition, translateX);
    }
  };

  const finalizeDrag = useCallback(() => {
    setIsDragging(false);

    requestAnimationFrame(() => {
      // Ensure dimensions are up-to-date before index calculation
      const { cardWidth, gapSize } = getCardWidth();

      // Calculate target index based on final position
      let newIndex = Math.round((translateX * -1) / (cardWidth + gapSize));
      newIndex = Math.max(0, Math.min(newIndex, cards.length - visibleCards));
      setCurrentIndex(newIndex);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translateX, currentIndex]);

  const handleMove = (
    e:
      | MouseEvent
      | React.TouchEvent<HTMLDivElement>
      | React.TouchEvent<HTMLAnchorElement>
      | TouchEvent,
  ) => {
    if (!isDragging) return;
    const initialTranslate = currentTranslate;
    const touches = 'touches' in e ? true : false;
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const distanceFromStart = x - startX;
    let moveTranslate =
      distanceFromStart < 0
        ? initialTranslate + (touches ? distanceFromStart * 1.5 : distanceFromStart)
        : initialTranslate - (touches ? distanceFromStart * 1.5 * -1 : distanceFromStart * -1);
    // The value can go beyond the bounds of the carousel
    moveTranslate = Math.min(
      Math.max(
        moveTranslate,
        -1 * (cards.length - 1) * (getCardWidth().cardWidth + getCardWidth().gapSize),
      ),
      0,
    );

    setTranslateX(moveTranslate);
  };

  const handleDragRealease = () => {
    setIsDragging(false);
    finalizeDrag();
  };

  const removeEventListener = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleDragRealease);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleDragRealease);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleDragRealease);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleDragRealease);
    }

    return removeEventListener;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  return {
    tags,
    buttonTagsRef,
    handleTagClick,
    selectedTag,
    handleSelectChange,
    buttonProps: {
      currentIndex,
      cards: filteredCards,
      visibleCards,
      setCurrentIndex,
    },
    handleDragStart,
    isDragging,
    translateX,
    carouselRef,
    filteredCards,
    visibleCards,
  };
};
