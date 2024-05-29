import React from 'react';
import Card from './Card';
import { cn } from '../../../../utils/helper';
import { TCardsProps } from './type';

const Cards = ({
  cards,
  numberOfCards = 2,
  showImg,
  mainTitle,
  showMainTitle = true,
}: TCardsProps) => {
  return (
    <div className="container mx-auto">
      {showMainTitle && mainTitle && (
        <div className="mb-12 text-4xl font-bold text-acu-purple-100">{mainTitle}</div>
      )}
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
    </div>
  );
};

export default Cards;
