import { TLink } from '@/app/utils/helper';

export type TLeftColumnProps = {
  title: string;
  paragraphs: {
    text: string;
    customStyle?: string;
  }[];
};

export type TContactColumnProps = {
  icon?: 'phone' | 'email';
  title?: string;
  link: TLink;
};

export type TContentPanelVersion = 'purple' | 'grey' | 'sand';

export type TContentPanelProps = {
  version?: TContentPanelVersion;
  leftColumn: TLeftColumnProps;
  columns: TContentPanelColumnProps[];
  contactColumns: TContactColumnProps[];
};

export type TContentPanelColumnProps = {
  version?: TContentPanelVersion;
  icon: 'chat-bubble-2' | 'question-mark';
  title: string;
  description: string[];
  link: TLink;
};
