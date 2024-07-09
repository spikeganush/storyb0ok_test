import { TLink } from '@/app/utils/helper';
import { TOneColumnHalfProps } from '../../OneColumn/Half/OneColumnHalf';
import { TCardProps } from '../../2-3-4-Columns/2-3-4-up/type';

export type TThreeColumnsWithPanelStats = {
  title: string;
  stats: {
    title: string;
    description: string;
    value: string;
  }[];
  link: TLink;
};

export type TImage = {
  src: string;
  alt: string;
};

export type TBaseProps = {
  image: TImage;
  imagePosition?: 'left' | 'right';
  onStorybook?: boolean;
};

export type TUpperStatsProps = {
  upperPart: TThreeColumnsWithPanelStats;
  upperPartType: 'stats';
};

export type TUpperTextProps = {
  upperPart: TOneColumnHalfProps;
  upperPartType: 'text';
};

export type TLowerCardsProps = {
  lowerPart: [TCardProps, TCardProps];
  lowerPartType: 'cards';
};

export type TLowerTextProps = {
  lowerPart: TOneColumnHalfProps;
  lowerPartType: 'text';
};
