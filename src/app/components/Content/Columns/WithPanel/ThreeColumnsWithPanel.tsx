import React from 'react';
import { TCardProps } from '../../2-3-4-Columns/2-3-4-up/type';
import { TOneColumnHalfProps } from '../../OneColumn/Half/OneColumnHalf';
import Card from '../../2-3-4-Columns/2-3-4-up/Card';
import OneColumnCard from '../../OneColumn/Half/OneColumnCard';
import ThreeColumnsWithPanelStats from './ThreeColumnsWithPanelStats';
import { cn, TLink } from '../../../../utils/helper';

export type TThreeColumnsWithPanelStats = {
  title: string;
  stats: {
    title: string;
    description: string;
    value: string;
  }[];
  link: TLink;
};

type TImage = {
  src: string;
  alt: string;
};

type TBaseProps = {
  image: TImage;
  imagePosition?: 'left' | 'right';
  onStorybook?: boolean;
};

type TUpperStatsProps = {
  upperPart: TThreeColumnsWithPanelStats;
  upperPartType: 'stats';
};

type TUpperTextProps = {
  upperPart: TOneColumnHalfProps;
  upperPartType: 'text';
};

type TLowerCardsProps = {
  lowerPart: [TCardProps, TCardProps];
  lowerPartType: 'cards';
};

type TLowerTextProps = {
  lowerPart: TOneColumnHalfProps;
  lowerPartType: 'text';
};

export type TThreeColumnsWithPanelProps = TBaseProps &
  (TUpperStatsProps | TUpperTextProps) &
  (TLowerCardsProps | TLowerTextProps);

const ThreeColumnsWithPanel = ({
  image,
  imagePosition = 'left',
  upperPart,
  upperPartType,
  lowerPart,
  lowerPartType,
  onStorybook = false,
}: TThreeColumnsWithPanelProps) => {
  return (
    <div
      className={cn('mx-auto w-full @container', {
        container: onStorybook,
      })}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(2,_auto)] lg:gap-x-4">
        <div
          className={cn(
            'stats mb-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:mb-12',
            {
              'lg:col-start-1 lg:col-end-2 lg:pl-12': imagePosition === 'right',
            },
          )}
        >
          {upperPart &&
            (upperPartType === 'text' ? (
              <OneColumnCard {...upperPart} />
            ) : (
              upperPart.stats && <ThreeColumnsWithPanelStats {...upperPart} />
            ))}
        </div>
        <div
          className={cn(
            'image flex lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 lg:items-start lg:justify-center',
            {
              'lg:col-start-2 lg:col-end-3': imagePosition === 'right',
            },
          )}
        >
          {image && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mb-12 w-full object-contain lg:z-10 lg:max-w-[470px]"
                src={image.src}
                alt={image.alt}
              />
            </>
          )}
        </div>
        <div
          className={cn(
            '2col bg-acu-black-15 px-4 py-12 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:px-[unset] lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-3rem),calc(100%-3rem)_100%,0_100%)]',
            {
              'lg:[clip-path:polygon(0_0,100%_0,100%_100%,3rem_100%,0_calc(100%-3rem))]':
                imagePosition === 'right',
            },
          )}
        >
          <div
            className={cn('pr-12 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid', {
              'pl-12 pr-0 lg:col-start-1 lg:col-end-2': imagePosition === 'right',
            })}
          >
            <div
              className={cn(
                'grid grid-flow-row grid-cols-1 gap-[30px] gap-y-12 lg:grid-cols-2 lg:grid-rows-[repeat(4,_auto)] lg:gap-y-0',
                {
                  block: lowerPartType === 'text',
                },
              )}
            >
              {lowerPart && lowerPartType === 'cards'
                ? lowerPart?.length > 0 &&
                  lowerPart.map((card, index) => (
                    <Card key={index} {...card} breakpoint="lg" showImg={false} />
                  ))
                : lowerPartType === 'text' && <OneColumnCard {...lowerPart} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnsWithPanel;
