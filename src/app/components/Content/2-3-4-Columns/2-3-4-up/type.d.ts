import { TLink } from '@/app/utils/helper';

export type TCardProps = {
  imgUrl?: string;
  showImg?: boolean;
  title: string;
  content: string;
  cta: TLink & {
    transparent?: boolean;
  };
  breakpoint?: 'md' | 'lg';
};

export type TCardsProps = {
  cards: TCardProps[];
  numberOfCards?: number;
  showImg?: boolean;
  mainTitle?: string;
  showMainTitle?: boolean;
};
