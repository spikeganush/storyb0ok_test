import React from 'react';
import { cn } from '@/app/utils/helper';
import ContentPanelLeftCol from './ContentPanelLeftCol';
import ContentPanelRightCol from './ContentPanelRightCol';
import { TContentPanelProps } from './type';

const ContentPanel = ({
  version = 'purple',
  leftColumn,
  columns,
  contactColumns,
}: TContentPanelProps) => {
  return (
    <div
      className={cn('w-full bg-acu-purple-120 text-acu-white', {
        'bg-acu-grey-10 text-acu-charcoal-100': version === 'grey',
        'bg-acu-sand text-acu-purple-100': version === 'sand',
      })}
    >
      <div className="mx-auto flex max-w-[1170px] flex-col gap-8 px-4 py-20 md:flex-row min-[1235px]:px-0">
        <ContentPanelLeftCol leftColumn={leftColumn} version={version} />
        <ContentPanelRightCol columns={columns} version={version} contactColumns={contactColumns} />
      </div>
    </div>
  );
};

export default ContentPanel;
