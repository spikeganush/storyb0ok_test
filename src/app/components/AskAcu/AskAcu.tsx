import React from 'react';
import { TAskAcuColumnProps } from './AskAcuColumn';
import { cn } from '@/app/utils/helper';
import AskAcuLeftCol from './AskAcuLeftCol';
import AskAcuRightCol from './AskAcuRightCol';

export type TLeftColumnProps = {
  title: string;
  paragraphs: {
    text: string;
    customStyle?: string;
  }[];
};

export type TContactColumnProps = {
  icon?: 'phone' | 'email';
  title?: string;
  link: {
    url: string;
    text: string;
  };
};

export type TAskAcuVersion = 'purple' | 'grey' | 'sand';

export type TAskAcuProps = {
  version?: TAskAcuVersion;
  leftColumn: TLeftColumnProps;
  columns: TAskAcuColumnProps[];
  contactColumns: TContactColumnProps[];
};

const AskAcu = ({ version = 'purple', leftColumn, columns, contactColumns }: TAskAcuProps) => {
  return (
    <div
      className={cn('w-full bg-acu-purple-120 text-acu-white', {
        'bg-acu-grey-10 text-acu-charcoal-100': version === 'grey',
        'bg-acu-sand text-acu-purple-100': version === 'sand',
      })}
    >
      <div className="mx-auto flex max-w-[1170px] flex-col gap-8 px-4 py-20 md:flex-row min-[1235px]:px-0">
        <AskAcuLeftCol leftColumn={leftColumn} version={version} />
        <AskAcuRightCol columns={columns} version={version} contactColumns={contactColumns} />
      </div>
    </div>
  );
};

export default AskAcu;
