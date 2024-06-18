import React from 'react';
import { TFooterRightColLinkImage } from './Footer';
import { cn } from '@/app/utils/helper';

const FooterLinkImage = ({ title, url, image, version = 'grey' }: TFooterRightColLinkImage) => {
  return (
    <div>
      {title && (
        <h2
          className={cn('mb-4 text-lg font-bold text-acu-purple-100', {
            'text-acu-white': version === 'purple',
          })}
        >
          {title}
        </h2>
      )}
      <a href={url}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={image.alt}
          className="opacity-100 duration-300 hover:opacity-50"
        />
      </a>
    </div>
  );
};

export default FooterLinkImage;
