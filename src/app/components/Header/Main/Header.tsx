import { cn } from '@/app/utils/helper';
import { useIsMobile } from '@/app/utils/useIsMobile';
import Image from 'next/image';
import React, { useState } from 'react';
import HeaderTopBar from './HeaderTopBar';
import { THeaderProps } from './type';

const Header = ({ mainLinks, topBarLinks, topBarVisible = true }: THeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isMobile } = useIsMobile(1024);

  return (
    <header className={cn('main-header items-center bg-acu-black-15')}>
      {topBarVisible && <HeaderTopBar links={topBarLinks} />}
      <nav className="mx-auto mt-[1.2rem] flex max-w-[1170px] justify-between pb-4">
        <a href="/">
          <Image
            className="h-[2.9rem] w-auto"
            src="https://www.acu.edu.au/-/media/feature/identity/logo/acu_logo_purple.svg?la=en&hash=D403AF803A484263DA4BC99D3664CEAD"
            alt="logo"
            width={200}
            height={50}
          />
        </a>
        <ul className="relative flex">
          {mainLinks &&
            mainLinks.map((link, index) => (
              <li
                key={`${index}-${link.text}`}
                className={cn(
                  'group text-acu-charcoal-120 transition-colors duration-300 hover:bg-acu-white hover:text-acu-purple-115',
                )}
              >
                <a
                  href={link.url}
                  className={cn('px-[0.625rem] pb-[1.8rem] pt-[0.80rem] text-[0.94rem]', {})}
                >
                  {link.text}
                </a>
                {link.firstLevelSubLinks && (
                  <ul
                    className={cn(
                      'absolute -left-24 right-0 top-full z-10 hidden auto-cols-fr bg-acu-white py-2 pt-1 text-acu-charcoal-120 shadow-lg transition-all duration-300 group-hover:grid',
                      {},
                    )}
                  >
                    {(() => {
                      const columnCounts = [0, 0, 0, 0];
                      return link.firstLevelSubLinks.map((subLink, subIndex) => {
                        const column = subLink.column - 1; // 0-based index
                        const rowStart = columnCounts[column] + 1;
                        columnCounts[column]++;

                        return (
                          <li
                            className={cn('px-4 py-2', {
                              [`col-start-${subLink.column}`]: true,
                              [`row-start-${rowStart}`]: true,
                            })}
                            key={`${subIndex}-${subLink.text}`}
                          >
                            <a href={subLink.url} className="text-acu-charcoal-120">
                              {subLink.text}
                            </a>
                            {subLink.secondLevelSubLinks && (
                              <ul className="">
                                {subLink.secondLevelSubLinks.map((secondLink, secondIndex) => (
                                  <li key={`${secondIndex}-${secondLink.text}`} className="">
                                    <a href={secondLink.url} className="text-acu-charcoal-120">
                                      {secondLink.text}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      });
                    })()}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
