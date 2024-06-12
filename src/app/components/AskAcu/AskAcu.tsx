import React from 'react';
import AskAcuColumn, { TAskAcuColumnProps } from './AskAcuColumn';
import { cn } from '@/app/utils/helper';

export type TLeftColumnProps = {
  title: string;
  paragraphs: {
    text: string;
    customStyle?: string;
  }[];
};

export type TContactColumnProps = {
  icon?: string;
  title?: string;
  link: {
    url: string;
    text: string;
  };
};

export type TAskAcuProps = {
  leftColumn: TLeftColumnProps;
  columns: TAskAcuColumnProps[];
  contactColumns: TContactColumnProps[];
};

const AskAcu = ({ leftColumn: { title, paragraphs }, columns, contactColumns }: TAskAcuProps) => {
  return (
    <div className="w-full bg-acu-purple-120 text-acu-white">
      <div className="mx-auto flex max-w-[1170px] gap-8 px-4 py-20 min-[1235px]:px-0">
        <div className="md:w-1/3">
          <h1 className="mb-16 text-[2.625rem] font-bold leading-none">{title}</h1>
          <div className="text-acu-purple-20">
            {paragraphs.map((paragraph, index) => {
              return (
                <p key={index} className={cn(paragraph.customStyle)}>
                  {paragraph.text}
                </p>
              );
            })}
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex">
            {columns &&
              columns.length > 0 &&
              columns.map((column, index) => {
                return <AskAcuColumn key={index} {...column} />;
              })}
          </div>
          {contactColumns?.length > 0 && (
            <div className="mt-12 flex justify-between">
              {contactColumns.map((contact, index) => {
                return (
                  <div className="inline-block" key={index}>
                    {contact.title && <h3 className="inline">{contact.title}</h3>}
                    <a href={contact.link.url}>{contact.link.text}</a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskAcu;
