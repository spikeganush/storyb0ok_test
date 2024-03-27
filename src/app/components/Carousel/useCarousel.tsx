import { useState, useEffect, useRef, useCallback } from 'react';
import { TCardCarousel } from '../Cards/Carousel/CardCarousel';
import { easeOut, handleEventAndBlur } from '../../utils/helper';

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
  const [velocity, setVelocity] = useState(0);
  const [prevMoveX, setPrevMoveX] = useState(0);

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

  const updateTranslateX = useCallback(() => {
    const { cardWidth, gapSize } = getCardWidth();
    setTranslateX((cardWidth + gapSize) * currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setStartX(pageX - (carouselRef.current?.offsetLeft ?? 0));
    setCurrentTranslate(initialTranslate);
    setVelocity(0);
  }, []);

  const handleMouseDown = useCallback(
    (
      e:
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
      initDrag(e.pageX - carouselRef.current!.offsetLeft, translateX);
    },
    [translateX, initDrag],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement> | React.TouchEvent<HTMLAnchorElement>) => {
      const touch = e.touches[0];
      initDrag(touch.pageX - carouselRef.current!.offsetLeft, translateX);
    },
    [translateX, initDrag],
  );

  const handleMove = useCallback(
    (moveX: number) => {
      if (isDragging) {
        requestAnimationFrame(() => {
          const velocity = moveX - prevMoveX;
          setPrevMoveX(moveX);
          setTranslateX(currentTranslate - moveX + startX + velocity);
        });
      }
    },
    [isDragging, currentTranslate, startX, prevMoveX],
  );

  const finalizeDrag = useCallback(() => {
    setIsDragging(false);

    requestAnimationFrame(() => {
      let newTranslateX = translateX + velocity * friction;

      // Ensure dimensions are up-to-date before index calculation
      const { cardWidth, gapSize } = getCardWidth();

      // Calculate target index based on final position
      let newIndex = Math.round(newTranslateX / (cardWidth + gapSize));
      console.log(newTranslateX, cardWidth + gapSize, newTranslateX / (cardWidth + gapSize));
      // newIndex = Math.max(0, Math.min(newIndex, cards.length - visibleCards));

      // Adjust for momentum overshoot if necessary
      if (newIndex === currentIndex) {
        console.log('Same index');
        newTranslateX = -(newIndex * (cardWidth + gapSize)); // Snap to current card
      } else {
        console.log('Different index');
        // Calculate distance to the target card based on the calculated index
        const targetPosition = -(newIndex * (cardWidth + gapSize));
        const distance = newTranslateX - targetPosition;
        newTranslateX = targetPosition + easeOut(distance);

        // Adjust newTranslateX if momentum caused overshoot.
        if (newTranslateX > targetPosition) {
          newTranslateX = targetPosition;
        } else if (newTranslateX < targetPosition - cardWidth) {
          newTranslateX = targetPosition - cardWidth;
        }
      }

      setTranslateX(newTranslateX);
      setVelocity(velocity * friction);
      setCurrentIndex(newIndex);

      if (Math.abs(velocity) < threshold) {
        setIsDragging(false);
      }
    });
  }, [cards.length, visibleCards, translateX, getCardWidth]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      requestAnimationFrame(() => {
        const x = e.pageX - carouselRef.current!.offsetLeft;
        const moveTranslate = currentTranslate - (x - startX);
        setTranslateX(moveTranslate);
      });
    };

    const handleMouseUp = () => {
      finalizeDrag();
      removeEventListener();
    };
    const handleTouchMove = (
      e: React.TouchEvent<HTMLDivElement> | React.TouchEvent<HTMLAnchorElement> | TouchEvent,
    ) => {
      e.preventDefault();
      if (!isDragging) return; // Only proceed if a drag operation is active
      const touch = e.touches[0]; // Get the first touch point
      const moveTranslate =
        currentTranslate - (touch.pageX - carouselRef.current!.offsetLeft - startX);
      setTranslateX(moveTranslate); // Update the translateX state to move the carousel
    };
    const handleTouchEnd = () => {
      finalizeDrag();
      removeEventListener();
    };

    const removeEventListener = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return removeEventListener;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, handleMove]);

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
    handleMouseDown,
    handleTouchStart,
    isDragging,
    translateX,
    carouselRef,
    filteredCards,
    visibleCards,
  };
};
