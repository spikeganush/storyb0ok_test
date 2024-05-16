import { cn } from '../../../utils/helper';
import React from 'react';
import Links from '../../Links/Links';

type TSubPart = {
  title: string;
  paragraphs: string[];
  link?: {
    url: string;
    text: string;
  };
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
  link?: {
    url: string;
    text: string;
  };
};

const OneColumnWithMedia = ({
  textPosition = 'left',
  media,
  title,
  paragraphs,
  subParts,
  link,
}: TOneColumnWithImageProps): JSX.Element => {
  return (
    <div className="container mx-auto @container">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-x-24">
        <div
          className={cn('col-start-1 col-end-2 row-start-1 row-end-[-1] ', {
            'md:col-start-1 md:col-end-2': textPosition === 'left',
            'md:col-start-2 md:col-end-3': textPosition === 'right',
          })}
        >
          <h1 className="text-4xl font-bold text-acu-purple-100">{title}</h1>
          {paragraphs?.length > 0 &&
            paragraphs.map((pararaph, index) => (
              <p
                key={index}
                className={cn('pt-4 text-base text-acu-black-80', {
                  'pt-2': index === 0,
                })}
              >
                {pararaph}
              </p>
            ))}
          {link && (
            <Links
              text={link.text}
              url={link.url}
              colours="text-acu-red-100"
              style="mt-4"
              type="arrow"
            />
          )}
          {subParts?.map((subPart, index) => (
            <div className="mt-4" key={index}>
              <h1 className="text-4xl font-bold text-acu-purple-100">{subPart.title}</h1>
              {subPart.paragraphs?.length > 0 &&
                subPart.paragraphs.map((paragraph, index) => (
                  <p key={index} className="pt-4 text-base text-acu-black-80">
                    {paragraph}
                  </p>
                ))}
              {subPart.link && (
                <Links
                  text={subPart.link.text}
                  url={subPart.link.url}
                  colours="text-acu-red-100"
                  style="mt-4"
                  type="arrow"
                />
              )}
            </div>
          ))}
        </div>
        <div
          className={cn('col-start-1 col-end-2 row-start-2 row-end-3 md:row-start-1 md:row-end-2', {
            'md:col-start-2 md:col-end-3': textPosition === 'left',
            'md:col-start-1 md:col-end-2': textPosition === 'right',
          })}
        >
          {media.mediaType === 'image' ? (
            <img src={media.src} alt={media.alt} />
          ) : (
            <video src={media.src} controls />
          )}
        </div>
      </div>
    </div>
  );
};

export default OneColumnWithMedia;
