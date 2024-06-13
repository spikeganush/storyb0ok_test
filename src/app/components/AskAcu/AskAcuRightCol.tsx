import React from 'react';
import AskAcuColumn, { TAskAcuColumnProps } from './AskAcuColumn';
import { TAskAcuVersion, TContactColumnProps } from './AskAcu';
import { cn } from '@/app/utils/helper';
import AskAcuRightColContact from './AskAcuRightColContact';

const AskAcuRightCol = ({
  columns,
  version,
  contactColumns,
}: {
  columns: TAskAcuColumnProps[];
  version: TAskAcuVersion;
  contactColumns: TContactColumnProps[];
}) => {
  return (
    <div className="w-full md:w-2/3">
      <div className="flex flex-col min-[560px]:flex-row">
        {columns?.length > 0 &&
          columns.map((column, index) => {
            return <AskAcuColumn key={index} {...column} version={version} />;
          })}
      </div>
      <AskAcuRightColContact contactColumns={contactColumns} version={version} />
    </div>
  );
};

export default AskAcuRightCol;
