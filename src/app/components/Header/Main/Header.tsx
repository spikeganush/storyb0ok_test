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
    <header className={cn('main-header font-open-sans items-center bg-acu-black-15')}>
      {topBarVisible && <HeaderTopBar links={topBarLinks} />}
      <nav className="mx-auto flex max-w-[1170px] justify-between pb-4 pt-[1.2rem]">
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
                  <div
                    className={cn(
                      'absolute -left-24 right-0 top-full z-10 hidden auto-cols-fr gap-x-10 bg-acu-white py-10 pl-24 pr-8 text-[0.94rem] text-acu-charcoal-120 shadow-lg transition-all duration-300 group-hover:flex',
                      {},
                    )}
                  >
                    {Array.from(
                      {
                        length: link.firstLevelSubLinks[link.firstLevelSubLinks.length - 1].column,
                      },
                      (_, columnIndex) => (
                        <ul key={columnIndex} className="flex-1">
                          {link.firstLevelSubLinks &&
                            link.firstLevelSubLinks
                              .filter((subLink) => subLink.column === columnIndex + 1)
                              .map((subLink, subIndex) => (
                                <li
                                  key={`${subIndex}-${subLink.text}`}
                                  className={cn(
                                    'mb-8 flex flex-col gap-y-[10px] text-pretty last:mb-0',
                                    {
                                      'mb-[10px]': !!!subLink.secondLevelSubLinks?.length,
                                    },
                                  )}
                                >
                                  <a
                                    href={subLink.url}
                                    className="font-[650] text-acu-purple-100 icon-after-right-arrow-2 after:ml-[7px] after:inline-block after:text-[12px] hover:underline"
                                  >
                                    {subLink.text}
                                  </a>
                                  {subLink.secondLevelSubLinks && (
                                    <ul className="flex flex-col gap-y-[10px]">
                                      {subLink.secondLevelSubLinks.map(
                                        (secondLink, secondIndex) => (
                                          <li key={`${secondIndex}-${secondLink.text}`}>
                                            <a
                                              href={secondLink.url}
                                              className="text-acu-charcoal-120 hover:underline"
                                            >
                                              {secondLink.text}
                                            </a>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                        </ul>
                      ),
                    )}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
