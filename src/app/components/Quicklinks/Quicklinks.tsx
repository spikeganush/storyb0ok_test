import React, { useEffect, useMemo, useState } from 'react';
import { TQuicklinksProps } from './type';
import Image from 'next/image';
import { cn } from '../../utils/helper';

const Quicklinks = (props: TQuicklinksProps) => {
  const { links } = props;
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const rowsPerColumn = useMemo(
    () => (windowWidth > 768 ? Math.ceil(links.length / 2) : 100),
    [links.length, windowWidth],
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full md:w-1/2">
      <ul className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
        {links.map((link, index) => (
          <li
            className={cn(
              'group mb-2 flex items-center justify-between border-b border-acu-black-40 pb-2 first-of-type:border-t first-of-type:pt-2',
              {
                'border-t pt-2': index === rowsPerColumn,
              },
            )}
            key={index}
            style={{
              // Calculate column by checking if the index is less than half the number of links
              gridColumn: index < rowsPerColumn ? 1 : 2,
              // Row calculation is based on index modulus rowsPerColumn
              gridRow: (index % rowsPerColumn) + 1,
            }}
          >
            <a
              href={link.url}
              className="flex flex-1 items-center font-semibold underline-offset-2 group-hover:underline"
            >
              <span className="flex">
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={29}
                  height={29}
                  className="mr-2 object-contain"
                />
                <span className="">{link.label}</span>
              </span>
            </a>
            <span className="leading-none">→</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quicklinks;
