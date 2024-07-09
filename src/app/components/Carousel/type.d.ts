export type TCarouselProps = {
  cards: TCardCarousel[];
  title?: string;
  tagsAll?: boolean;
};

export type TButtonProps = {
  direction: 'prev' | 'next';
  currentIndex: number;
  cards: TCardCarousel[];
  visibleCards: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type TCarouselDropdownProps = {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string) => void;
};

export type UseCarouselParams = {
  cards: TCardCarousel[];
  tagsAll?: boolean;
};
