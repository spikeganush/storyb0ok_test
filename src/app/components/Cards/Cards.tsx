import React from 'react';
import Card, { TCardProps } from './Card';
import { cn } from '../../utils/helper';

export type TCardsProps = {
  cards: TCardProps[];
  numberOfCards?: number;
  showImg?: boolean;
};
const Cards = (props: TCardsProps) => {
  const { cards, numberOfCards = 1, showImg } = props;
  return (
    <div
      className={cn(
        'grid grid-flow-row gap-[30px] gap-y-8 md:grid-rows-[repeat(4,auto)] md:gap-y-0',
        {
          'grid-cols-1 md:grid-cols-1': numberOfCards === 1,
          'grid-cols-1 md:grid-cols-2': numberOfCards === 2,
          'grid-cols-1 md:grid-cols-3': numberOfCards === 3,
          'grid-cols-1 md:grid-cols-4': numberOfCards === 4,
        },
      )}
    >
      {cards &&
        cards
          .slice(0, numberOfCards)
          .map((card, index) => <Card key={index} {...card} showImg={showImg} />)}
    </div>
  );
};

export default Cards;
