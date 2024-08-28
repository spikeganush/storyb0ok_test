import { cn } from '@/app/utils/helper';
import React from 'react';
import { THeaderTopBarProps } from './type';

type TProps = {
  links: THeaderTopBarProps[];
};

const HeaderTopBar = ({ links }: TProps) => {
  return (
    <div className={cn('bg-acu-purple-120')}>
      <div className={cn('mx-auto max-w-[1170px]')}>
        <ul className={cn('flex items-center justify-between py-2')}>
          {links &&
            links.map((link, index) => (
              <li key={`${index}-${link.text}`}>
                <a
                  href={link.url}
                  className={cn(
                    'open-sans-font relative py-2 text-xs uppercase text-acu-white before:absolute before:left-0 before:right-0 before:top-0 before:h-[2px] before:transform before:bg-acu-white before:opacity-0 before:transition-opacity before:duration-300 before:content-[""] hover:before:opacity-75',
                    link.background,
                    link.textColour,
                    {
                      'px-[0.7rem] py-[0.35rem] !font-[650]': link.background,
                    },
                  )}
                >
                  {link.text}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTopBar;
