import { cn } from '@/app/utils/helper';
import React from 'react';
import { TAskAcuVersion } from './AskAcu';

export type TAskAcuColumnProps = {
  version?: TAskAcuVersion;
  icon: 'chat-bubble-2' | 'question-mark';
  title: string;
  description: string[];
  link: {
    url: string;
    text: string;
  };
};

const AskAcuColumn = ({
  version = 'purple',
  icon,
  title,
  description,
  link,
}: TAskAcuColumnProps) => {
  return (
    <div className="mt-8 w-full first-of-type:mt-0 min-[560px]:mt-0 min-[560px]:w-1/2">
      <span
        className={cn('before:leading-0 block leading-none before:text-[4rem]', {
          'icon-chat-bubble-2': icon === 'chat-bubble-2',
          'icon-question-mark': icon === 'question-mark',
          'text-acu-purple-100': version === 'sand',
          'text-acu-red-120': version === 'grey',
        })}
      ></span>
      <h2 className="my-8 text-[1.3725rem] font-semibold">{title}</h2>
      <div
        className={cn('mb-4 leading-6 text-acu-purple-20', {
          'text-acu-charcoal-120': version !== 'purple',
        })}
      >
        {description?.length > 0 &&
          description.map((desc, index) => {
            return <p key={index}>{desc}</p>;
          })}
      </div>
      <a
        href={link.url}
        className={cn(
          'flex w-max items-center font-semibold leading-[1.5] no-underline icon-after-right-arrow-2 after:mx-4 after:inline-block after:text-base after:font-normal after:leading-[1.5] hover:underline',
          {
            'acu-focus-white': version === 'purple',
            'acu-focus text-acu-purple-100': version === 'sand',
            'acu-focus text-acu-red-120': version === 'grey',
          },
        )}
      >
        {link.text}
      </a>
    </div>
  );
};

export default AskAcuColumn;
