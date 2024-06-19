export type TFooterColumns = {
  title?: string;
  links: TLink[];
  length?: number;
  version?: TFooterProps['version'];
};

export type TFooterConnect = {
  version?: TFooterProps['version'];
  title?: string;
  links: {
    icon: 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'instagram' | 'tiktok';
    url: string;
  }[];
};

export type TFooterRightColLinkImage = {
  title: string;
  url: string;
  image: {
    url: string;
    alt: string;
  };
  version?: TFooterProps['version'];
};

export type TFooterProps = {
  version?: 'purple' | 'sand' | 'grey';
  leftColumn?: TFooterColumns;
  centerColumn?: TFooterColumns & { length?: number };
  rightColumn: {
    connect: TFooterConnect;
    question: TFooterRightColLinkImage;
    online: TFooterRightColLinkImage;
  };
  quickLinks: TLink[];
  copyRight: string;
  aknowledgement: string;
};
