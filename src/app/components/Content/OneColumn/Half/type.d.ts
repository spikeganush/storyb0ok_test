import { TLink } from '@/app/utils/helper';

export type TOneColumnHalfProps = {
  title: string;
  paragraphs: string[];
  link?: TLink;
};

export type TSubPart = {
  title: string;
  paragraphs: string[];
  link?: TLink;
};

export type TOneColumnWithImageProps = {
  textPosition?: 'left' | 'right';
  media: {
    mediaType: 'image' | 'video';
    src: string;
    alt?: string;
  };
  title: string;
  paragraphs: string[];
  subParts?: TSubPart[];
  link?: TLink;
};
