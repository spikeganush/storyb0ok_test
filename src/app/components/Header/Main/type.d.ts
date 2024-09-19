import { TLink } from '@/app/utils/helper';

export type THeaderProps = {
  mainLinks: TMainLinks[];
  topBarLinks: THeaderTopBarProps[];
  topBarVisible?: boolean;
};

export type THeaderTopBarProps = {
  text: string;
  url: string;
  background?: string;
  textColour?: string;
};

export type TMainLinks = {
  text: string;
  url: string;
  firstLevelSubLinks?: firstLevelSubLinks[];
};

export type firstLevelSubLinks = {
  text: string;
  url: string;
  column: 1 | 2 | 3 | 4;
  secondLevelSubLinks?: TLink[];
};
