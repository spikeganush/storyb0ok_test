import React from 'react';
import { TFooterRightColLinkImage } from './Footer';

const FooterLinkImage = ({ title, url, image }: TFooterRightColLinkImage) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <a href={url}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.url} alt={image.alt} />
      </a>
    </div>
  );
};

export default FooterLinkImage;
