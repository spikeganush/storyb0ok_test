export type TabsButtonProps = {
  tabs: {
    title: string;
    children: React.ReactNode;
  }[];
  isMobile: boolean;
};

export type TabsContentProps = {
  children: React.ReactNode;
  refes: HTMLDivElement[];
  title: string;
  index: number;
  tabActiveIndex: number[];
  isMobile: boolean;
};

export type TabsWithBorderTopProps = {
  tabs: {
    title: string;
    children: React.ReactNode;
  }[];
};
