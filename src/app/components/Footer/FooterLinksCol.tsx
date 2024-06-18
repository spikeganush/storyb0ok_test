import React from 'react';
import { TFooterColumns } from './Footer';
import { cn } from '@/app/utils/helper';

const FooterLinksCol = ({ title, links, length }: TFooterColumns) => {
  const multipleColumns = length ? links.length > length : false;
  const columnCount = multipleColumns && length ? 2 : 1;
  const rowCount = Math.ceil(links.length / columnCount);
  return (
    <>
      {title && <h2 className="text-lg font-bold text-acu-purple-100">{title}</h2>}
      <ul
        className={cn('mt-4 grid grid-cols-1 gap-y-4 font-semibold text-acu-purple-100', {
          'grid-cols-[repeat(2,_41%)]': multipleColumns,
        })}
        style={{
          gridTemplateRows: `repeat(${rowCount}, auto)`,
        }}
      >
        {links.map((link, index) => {
          const column = Math.floor(index / rowCount) + 1;
          const row = (index % rowCount) + 1;
          return (
            <li
              key={index}
              style={{
                gridArea: `${row} / ${column} / span 1 / span 1`,
              }}
            >
              <a
                href={link.url}
                data-track-label={link.text}
                data-track-category="footer"
                data-track-action="navigation"
                className="no-underline hover:underline"
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FooterLinksCol;
