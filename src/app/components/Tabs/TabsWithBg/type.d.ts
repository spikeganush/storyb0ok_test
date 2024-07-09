import { TLink } from '@/app/utils/helper';

export type TTabArrowProps = {
  tabs: TTab[];
  isMobile: boolean;
};

export type TTabArrowButtonProps = {
  tab: TTab;
  index: number;
  activeTabIndex: number;
  divHeight: number;
  isMobile: boolean;
  onClick: (index: number) => void;
};

export type TLeftTab = {
  title: string;
  content: string;
};

export type TSubcontent = {
  title: string;
  content: string;
  link: TLink;
};

export type TTab = {
  title: string;
  subcontents: TSubcontent[];
};

export type TTabsWithBgProps = {
  image: string;
  leftTab: TLeftTab;
  tabs: TTab[];
};
