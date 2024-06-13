import React from 'react';
import { TFooterColumns } from './Footer';

const FooterLinksCol = ({ title, links }: TFooterColumns) => {
  return (
    <>
      {title && <h2>{title}</h2>}
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
    </>
  );
};

export default FooterLinksCol;
