import React from 'react';
import ContentPanelColumn from './ContentPanelColumn';
import ContentPanelRightColContact from './ContentPanelRightColContact';
import { TContactColumnProps, TContentPanelColumnProps, TContentPanelVersion } from './type';

const ContentPanelRightCol = ({
  columns,
  version,
  contactColumns,
}: {
  columns: TContentPanelColumnProps[];
  version: TContentPanelVersion;
  contactColumns: TContactColumnProps[];
}) => {
  return (
    <div className="w-full md:w-2/3">
      <div className="flex flex-col min-[560px]:flex-row">
        {columns?.length > 0 &&
          columns.map((column, index) => {
            return <ContentPanelColumn key={index} {...column} version={version} />;
          })}
      </div>
      <ContentPanelRightColContact contactColumns={contactColumns} version={version} />
    </div>
  );
};

export default ContentPanelRightCol;
