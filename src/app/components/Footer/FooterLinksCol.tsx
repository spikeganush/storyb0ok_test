import React, { useEffect, useState } from 'react';
import { cn, debounce } from '@/app/utils/helper';
import { TFooterColumns } from './type';

const FooterLinksCol = ({ title, links, length, version = 'grey' }: TFooterColumns) => {
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth < 330);
  const multipleColumns = length ? links.length > length : false;
  const columnCount = multipleColumns && length ? (isSmallMobile ? 1 : 2) : 1;
  const rowCount = Math.ceil(links.length / columnCount);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsSmallMobile(window.innerWidth < 330);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {title && (
        <h2
          className={cn('text-lg font-bold text-acu-purple-100', {
            'text-acu-white': version === 'purple',
          })}
        >
          {title}
        </h2>
      )}
      <ul
        className={cn('mt-4 grid grid-cols-1 gap-y-4 font-semibold text-acu-purple-100', {
          'text-acu-purple-20': version === 'purple',
          'grid-cols-1 min-[330px]:grid-cols-[repeat(2,_41%)]': multipleColumns,
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
