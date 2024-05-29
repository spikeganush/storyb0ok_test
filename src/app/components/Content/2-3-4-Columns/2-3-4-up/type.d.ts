export type TCardProps = {
  imgUrl?: string;
  showImg?: boolean;
  title: string;
  content: string;
  cta: {
    text: string;
    url: string;
    transparent?: boolean;
  };
};

export type TCardsProps = {
  cards: TCardProps[];
  numberOfCards?: number;
  showImg?: boolean;
  mainTitle?: string;
  showMainTitle?: boolean;
};
