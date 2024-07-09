import React from 'react';
import { TCardTileProps } from './type';

const CardTile = ({ title, url }: TCardTileProps) => {
  return (
    <a
      href={url}
      data-track-category="card no image"
      data-track-action="call to action"
      data-track-label={title}
      className="relative block h-32 w-full max-w-[255px] bg-white py-4 pl-4 pr-16 text-[1.3rem] font-bold text-acu-purple-100 shadow-[8px_15px_11px_-7px_rgba(0,0,0,0.1)] transition duration-300 after:absolute after:right-4 after:top-2 after:text-2xl after:font-semibold after:content-['→'] hover:bg-acu-purple-100 hover:text-acu-white "
    >
      {title}
    </a>
  );
};

export default CardTile;
