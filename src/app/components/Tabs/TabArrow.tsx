import React, { useEffect, useState } from 'react';
import { TTab } from './TabsWithBg';
import { cn } from '../../utils/helper';
import TabArrowButton from './TabArrowButton';

export type TTabArrowProps = {
  tabs: TTab[];
};

const TabArrow = (props: TTabArrowProps) => {
  const { tabs } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    // Ensure all buttons are properly aligned when the component mounts
    handleActiveTab(0); // You can remove this line if you don't want any tab active by default
  }, []); // Ensures this effect runs only once after mount

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto]">
      <div className={cn('flex shadow-[0_0.1rem_0.5rem_rgba(0,0,0,0.2)]', {})}>
        {tabs.map((tab, index) => (
          <TabArrowButton
            key={index}
            tab={tab}
            index={index}
            isActive={activeTabIndex === index}
            onClick={handleActiveTab}
          />
        ))}
      </div>

      <div className="col-start-1 col-end-[-1] row-start-2 row-end-3 grid ">
        {tabs.map((tab, index) => (
          <div
            className={cn(
              'visible col-start-1 col-end-[-1] row-start-2 row-end-3 grid grid-cols-2 gap-x-8 pt-12 opacity-100 duration-500',
              {
                'invisible opacity-0': activeTabIndex !== index,
              },
            )}
            aria-disabled={activeTabIndex !== index}
            key={index}
            style={{
              gridTemplateRows: `repeat(${Math.ceil(tab.subcontents.length / 2) * 3}, minmax(max-content, auto))`,
            }}
          >
            {tab.subcontents.map((subcontent, subcontentIndex) => {
              const cols = 2; // Two columns layout
              const colStart = (subcontentIndex % cols) + 1;
              // const totalRows = Math.ceil(tab.subcontents.length / cols) * 3;
              const rowStart = Math.floor(subcontentIndex / cols) * 3 + 1;

              return (
                <div
                  className={cn('grid w-full grid-cols-subgrid grid-rows-subgrid', {})}
                  key={`subcontent_${subcontentIndex}`}
                  style={{
                    gridColumn: `${colStart} / span 1`,
                    gridRowStart: `${rowStart}`,
                    gridRowEnd: `span 3`,
                  }}
                >
                  <h4 className="row-start-1 mb-4 text-[2.025rem] font-bold text-acu-purple-100">
                    {subcontent.title}
                  </h4>
                  <p className="row-start-2 mb-6 text-acu-charcoal-100">{subcontent.content}</p>
                  <a
                    href={subcontent.link.url}
                    className="row-start-3 mb-4 text-acu-red-100 underline"
                  >
                    {subcontent.link.text}
                  </a>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabArrow;
