import React, { useEffect, useRef, useState } from 'react';
import { TTab } from './TabsWithBg';
import { cn } from '../../utils/helper';
import TabArrowButton from './TabArrowButton';

export type TTabArrowProps = {
  tabs: TTab[];
  isMobile: boolean;
};

const TabArrow = (props: TTabArrowProps) => {
  const { tabs, isMobile } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleActiveTab = (index: number) => {
    setActiveTabIndex((prev) => (isMobile ? (prev === index ? -1 : index) : index));
    setDivHeight(isMobile ? (divRef.current ? divRef.current.scrollHeight : 0) : 0);
  };

  useEffect(() => {
    // Ensure all buttons are properly aligned when the component mounts
    handleActiveTab(0); // You can remove this line if you don't want any tab active by default
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Ensures this effect runs only once after mount

  useEffect(() => {
    if (isMobile) {
      setActiveTabIndex(-1);
    } else {
      setActiveTabIndex(0);
    }
  }, [isMobile]);

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto]">
      <div
        className={cn(
          'grid border border-acu-black-40 @[600px]:flex @[600px]:border-0 @[600px]:shadow-[0_0.1rem_0.5rem_rgba(0,0,0,0.2)]',
          {},
        )}
      >
        {tabs.map((tab, index) => (
          <TabArrowButton
            key={index}
            tab={tab}
            index={index}
            activeTabIndex={activeTabIndex}
            divHeight={divHeight + 60}
            isMobile={isMobile}
            onClick={handleActiveTab}
          />
        ))}
      </div>

      <div className="absolute inset-0 block px-6 @[570px]:grid @[600px]:relative @[600px]:col-start-1 @[600px]:col-end-[-1] @[600px]:row-start-2 @[600px]:row-end-3 @[600px]:px-0 ">
        {tabs.map((tab, index) => (
          <div
            ref={divRef}
            className={cn(
              'visible gap-x-8 overflow-hidden opacity-100 duration-500 @[570px]:col-start-1 @[570px]:col-end-[-1] @[570px]:row-start-1 @[570px]:row-end-2 @[570px]:grid @[570px]:grid-cols-2 @[600px]:row-start-2 @[600px]:row-end-3 @[600px]:pt-12',
              {
                'invisible h-0 opacity-0 @[600px]:h-auto': activeTabIndex !== index,
              },
            )}
            aria-disabled={activeTabIndex !== index}
            key={index}
            style={{
              gridTemplateRows: `repeat(${Math.ceil(tab.subcontents.length / 2) * 3}, minmax(max-content, auto))`,
              height: isMobile ? (activeTabIndex === index ? `${divHeight + 60}px` : '0') : 'auto',
              marginTop: isMobile ? (activeTabIndex === index ? `${index * 56 + 60}px` : '0') : '0',
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
                  <h4 className="row-start-1 mb-2 text-[2.025rem] font-bold leading-[2.025rem] text-acu-purple-100 @[910px]:mb-4">
                    {subcontent.title}
                  </h4>
                  <p className="row-start-2 mb-2 text-acu-charcoal-100 @[910px]:mb-6">
                    {subcontent.content}
                  </p>
                  <a
                    href={subcontent.link.url}
                    className="row-start-3 mb-4 text-acu-red-100 after:ml-4 after:inline-block after:content-['→'] hover:underline focus-visible:underline"
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
