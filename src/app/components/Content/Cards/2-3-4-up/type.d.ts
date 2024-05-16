export type TCardProps = {
  imgUrl: string;
  showImg?: boolean;
  title: string;
  content: string;
  ctaText: string;
  ctaUrl: string;
};

export type TCardsProps = {
  cards: TCardProps[];
  numberOfCards?: number;
  showImg?: boolean;
  mainTitle?: string;
  showMainTitle?: boolean;
};
