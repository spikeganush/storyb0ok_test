import React from 'react';
import { TCardProps } from '../../2-3-4-Columns/2-3-4-up/type';
import { TOneColumnHalfProps } from '../../OneColumn/Half/OneColumnHalf';
import Card from '../../2-3-4-Columns/2-3-4-up/Card';
import OneColumnCard from '../../OneColumn/Half/OneColumnCard';
import ThreeColumnsWithPanelStats from './ThreeColumnsWithPanelStats';
import { cn } from '../../../../utils/helper';

export type TThreeColumnsWithPanelStats = {
  title: string;
  stats: {
    title: string;
    description: string;
    value: string;
  }[];
  link: {
    url: string;
    text: string;
  };
};

export type TThreeColumnsWithPanelProps =
  | {
      image: {
        src: string;
        alt: string;
      };
      upperPart: TThreeColumnsWithPanelStats;
      type: 'stats';
      cards: [TCardProps, TCardProps];
    }
  | {
      image: {
        src: string;
        alt: string;
      };
      upperPart: TOneColumnHalfProps;
      type: 'text';
      cards: [TCardProps, TCardProps];
    };
const ThreeColumnsWithPanel = ({ image, upperPart, type, cards }: TThreeColumnsWithPanelProps) => {
  return (
    <div className="three-column-panel w-full @container">
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2 md:grid-rows-2">
        <div className="stats md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
          {upperPart &&
            (type === 'text' ? (
              <OneColumnCard {...upperPart} />
            ) : (
              <ThreeColumnsWithPanelStats {...upperPart} />
            ))}
        </div>
        <div className="image flex justify-start md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 ">
          {image && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="object-contain" src={image.src} alt={image.alt} />
            </>
          )}
        </div>
        <div className="2col md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
          <div
            className={cn(
              'grid grid-flow-row grid-cols-1 gap-[30px] gap-y-8 md:grid-cols-2 md:grid-rows-[repeat(4,auto)] md:gap-y-0',
            )}
          >
            {cards && cards.map((card, index) => <Card key={index} {...card} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnsWithPanel;
