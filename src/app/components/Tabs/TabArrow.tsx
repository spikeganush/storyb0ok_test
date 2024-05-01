import React from 'react';
import { TTab } from './TabsWithBg';

export type TTabArrowProps = {
  tabs: TTab[];
};

const TabArrow = (props: TTabArrowProps) => {
  const { tabs } = props;
  return (
    <div
      className="grid grid-rows-2"
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, fit-content(100%)`,
      }}
    >
      {tabs.map((tab, index) => (
        <>
          <div className="row-start-1 row-end-2">
            <button className="bg-acu-red-100 px-6 py-4">
              <h3 className="text-acu-white">{tab.title}</h3>
            </button>
          </div>
          <div className="col-start-1 col-end-[-1] row-start-2 row-end-3 ">
            <div className="flex flex-wrap">
              {tab.subcontents.map((subcontent, index) => (
                <div className="w-full p-4 md:w-1/2 lg:w-1/3" key={`subcontent_${index}`}>
                  <h4 className="text-acu-red-100">{subcontent.title}</h4>
                  <p className="text-acu-black-80">{subcontent.content}</p>
                  <a href={subcontent.link.url} className="text-acu-red-100 underline">
                    {subcontent.link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TabArrow;
