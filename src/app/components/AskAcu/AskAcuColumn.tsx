import { cn } from '@/app/utils/helper';
import React from 'react';

export type TAskAcuColumnProps = {
  icon: 'chat-bubble-2' | 'question-mark';
  title: string;
  description: string[];
  link: {
    url: string;
    text: string;
  };
};

const AskAcuColumn = ({ icon, title, description, link }: TAskAcuColumnProps) => {
  return (
    <div className="w-1/2">
      <span
        className={cn('before:leading-0 block leading-none before:text-[4rem]', {
          'icon-chat-bubble-2': icon === 'chat-bubble-2',
          'icon-question-mark': icon === 'question-mark',
        })}
      ></span>
      <h2 className="my-8 text-[1.3725rem] font-semibold">{title}</h2>
      <div className="mb-4 leading-6 text-acu-purple-20">
        {description?.length > 0 &&
          description.map((desc, index) => {
            return <p key={index}>{desc}</p>;
          })}
      </div>
      <a
        href={link.url}
        className="icon-after-right-arrow-2 acu-focus-white flex w-max items-center font-semibold leading-[1.5] no-underline after:mx-4 after:inline-block after:text-base after:font-normal after:leading-[1.5] hover:underline"
      >
        {link.text}
      </a>
    </div>
  );
};

export default AskAcuColumn;
