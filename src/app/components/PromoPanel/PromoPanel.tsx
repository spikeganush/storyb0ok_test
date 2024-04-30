import React from 'react';
import ButtonCTA from '../Buttons/CTA';
import { cn } from '../../utils/helper';

export type TPromoPanelProps = {
  text: string;
  cta_text: string;
  cta_url: string;
  bg_color?: 'red' | 'grey' | 'purple';
  width?: 'full' | 'content';
};

const PromoPanel = (props: TPromoPanelProps) => {
  const { text, cta_text, cta_url, bg_color = 'red', width = 'full' } = props;
  const bgColor =
    bg_color === 'red'
      ? 'bg-acu-red-100'
      : bg_color === 'grey'
        ? 'bg-acu-black-40'
        : 'bg-acu-purple-100';
  return (
    <div
      className={cn(
        'flex flex-1 items-center justify-between bg-acu-red-100 px-8 py-10 text-white [clip-path:polygon(0_0,calc(100%-2rem)_0,100%_2rem,100%_100%,0_100%)]',
        {
          [bgColor]: true,
          'w-fit flex-auto': width === 'content',
        },
      )}
    >
      <span className="mr-4 text-2xl font-bold">{text}</span>
      <ButtonCTA url={cta_url} text={cta_text} type="button" button_color={bg_color} />
    </div>
  );
};

export default PromoPanel;
