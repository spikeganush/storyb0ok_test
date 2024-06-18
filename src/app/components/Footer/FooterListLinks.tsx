import { TLink } from '@/app/utils/helper';
import React from 'react';

const FooterListLinks = (links: TLink[]) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            data-track-label={link.text}
            data-track-category="footer"
            data-track-action="navigation"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterListLinks;
