import { cn } from '../../../../utils/helper';
import React from 'react';
import Links from '../../../Links/Links';
import { TOneColumnWithImageProps } from './type';

const OneColumnWithMedia = ({
  textPosition = 'left',
  media,
  title,
  paragraphs,
  subParts,
  link,
}: TOneColumnWithImageProps): JSX.Element => {
  const mediaRowStart = 1;
  const textRows = 1 + (paragraphs?.length || 0) + (link ? 1 : 0) + (subParts?.length || 0);
  return (
    <div className="container mx-auto @container">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-24">
        <h1
          className={cn(
            'mb-4 text-4xl font-bold text-acu-purple-100 md:row-start-1 md:row-end-2 md:mb-0 md:grid',
            {
              'md:col-start-1 md:col-end-2': textPosition === 'left',
              'md:col-start-2 md:col-end-3': textPosition === 'right',
            },
          )}
        >
          {title}
        </h1>
        <div
          className={cn({
            'md:col-start-2 md:col-end-3': textPosition === 'left',
            'md:col-start-1 md:col-end-2': textPosition === 'right',
          })}
          style={{
            gridRowStart: mediaRowStart,
            gridRowEnd: mediaRowStart + textRows,
          }}
        >
          {media.mediaType === 'image' ? (
            <img src={media.src} alt={media.alt} />
          ) : (
            <video src={media.src} controls />
          )}
        </div>
        {paragraphs?.length > 0 &&
          paragraphs.map((pararaph, index) => (
            <p
              key={index}
              className={cn(
                'pt-4 text-base text-acu-black-80 md:row-start-2 md:row-end-3 md:grid',
                {
                  'pt-2': index === 0,
                  'md:col-start-1 md:col-end-2': textPosition === 'left',
                  'md:col-start-2 md:col-end-3': textPosition === 'right',
                },
              )}
            >
              {pararaph}
            </p>
          ))}
        {link && (
          <Links
            text={link.text}
            url={link.url}
            colours="text-acu-red-100"
            style={cn('mt-4 md:row-start-3 md:row-end-4 md:grid', {
              'md:col-start-1 md:col-end-2': textPosition === 'left',
              'md:col-start-2 md:col-end-3': textPosition === 'right',
            })}
            type="arrow"
          />
        )}
        {subParts?.map((subPart, index) => (
          <div
            className={cn('mt-4 md:grid', {
              'md:col-start-1 md:col-end-2': textPosition === 'left',
              'md:col-start-2 md:col-end-3': textPosition === 'right',
            })}
            key={index}
            style={{
              gridRowStart: 3 + index,
              gridRowEnd: 4 + index,
            }}
          >
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
    </div>
  );
};

export default OneColumnWithMedia;
