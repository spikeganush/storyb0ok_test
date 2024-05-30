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

type TImage = {
  src: string;
  alt: string;
};

type TBaseProps = {
  image: TImage;
  cards: [TCardProps, TCardProps];
  onStorybook?: boolean;
};

type TStatsProps = {
  upperPart: TThreeColumnsWithPanelStats;
  type: 'stats';
};

type TTextProps = {
  upperPart: TOneColumnHalfProps;
  type: 'text';
};

export type TThreeColumnsWithPanelProps = TBaseProps & (TStatsProps | TTextProps);

const ThreeColumnsWithPanel = ({
  image,
  upperPart,
  type,
  cards,
  onStorybook = false,
}: TThreeColumnsWithPanelProps) => {
  return (
    <div
      className={cn('mx-auto w-full @container', {
        container: onStorybook,
      })}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(2,_auto)] lg:gap-x-4">
        <div className="stats mb-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:mb-12">
          {upperPart &&
            (type === 'text' ? (
              <OneColumnCard {...upperPart} />
            ) : (
              <ThreeColumnsWithPanelStats {...upperPart} />
            ))}
        </div>
        <div className="image flex lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 lg:items-start lg:justify-center">
          {image && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full object-contain lg:z-10 lg:max-w-[470px]"
                src={image.src}
                alt={image.alt}
              />
            </>
          )}
        </div>
        <div className="2col bg-acu-black-15 py-12 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-3rem),calc(100%-3rem)_100%,0_100%)]">
          <div className="pr-12 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid">
            <div
              className={cn(
                'grid grid-flow-row grid-cols-1 gap-[30px] gap-y-12 lg:grid-cols-2 lg:grid-rows-[repeat(4,_auto)] lg:gap-y-0',
              )}
            >
              {cards &&
                cards.map((card, index) => (
                  <Card key={index} {...card} breakpoint="lg" showImg={false} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnsWithPanel;
