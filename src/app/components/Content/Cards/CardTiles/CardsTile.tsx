import React from 'react';
import CardTile, { TCardTileProps } from './CardTile';

export type TCardsTileProps = {
  cards: TCardTileProps[];
  numberOfCards?: number;
};

const CardsTile = (props: TCardsTileProps) => {
  const { cards, numberOfCards } = props;
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-7 min-[566px]:justify-start">
      {cards.slice(0, numberOfCards ?? cards.length - 1).map((card, index) => (
        <CardTile key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsTile;
