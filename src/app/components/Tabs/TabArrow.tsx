import React, { useEffect, useState } from 'react';
import { TTab } from './TabsWithBg';
import { cn } from '../../utils/helper';

export type TTabArrowProps = {
  tabs: TTab[];
};

const TabArrow = (props: TTabArrowProps) => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(() =>
    Array(tabs.length)
      .fill(0)
      .map((_, idx) => (idx === 0 ? 1 : 0)),
  );

  const handleActiveTab = (index: number) => {
    setActiveTab((prev) => prev.map((_, i) => (i === index ? 1 : 0)));
  };

  useEffect(() => {
    // Ensure all buttons are properly aligned when the component mounts
    handleActiveTab(0); // You can remove this line if you don't want any tab active by default
  }, []); // Ensures this effect runs only once after mount

  const TabComponent = ({ tab, index }: { tab: TTab; index: number }) => {
    return (
      <>
        <button
          type="button"
          className={cn(
            'inline-block border-r border-acu-black-40 bg-acu-white px-6 py-4 text-acu-charcoal-120 duration-500 last-of-type:border-r-0',
            {
              'border-r-0 bg-acu-red-100 text-acu-white': activeTab[index] === 1,
            },
          )}
          onClick={() => handleActiveTab(index)}
        >
          <h3>{tab.title}</h3>
        </button>
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto]">
      <div
        className="col-start-1 row-start-1 row-end-2 grid justify-center shadow-[0_0.1rem_0.5rem_rgba(0,0,0,0.2)]"
        style={{
          gridTemplateColumns: `repeat(${tabs.length}, minmax(max-content, 1fr))`,
        }}
      >
        {tabs.map((tab, index) => (
          <TabComponent tab={tab} index={index} key={index} />
        ))}
      </div>

      <div className="col-start-1 col-end-[-1] row-start-2 row-end-3 ">
        {tabs.map(
          (tab, index) =>
            !!activeTab[index] && (
              <div
                className={cn('flex flex-wrap aria-selected:flex')}
                aria-selected={true}
                key={index}
              >
                {tab.subcontents.map((subcontent, index) => (
                  <div className="w-full p-4 md:w-1/2" key={`subcontent_${index}`}>
                    <h4 className="text-acu-red-100">{subcontent.title}</h4>
                    <p className="text-acu-black-80">{subcontent.content}</p>
                    <a href={subcontent.link.url} className="text-acu-red-100 underline">
                      {subcontent.link.text}
                    </a>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default TabArrow;
