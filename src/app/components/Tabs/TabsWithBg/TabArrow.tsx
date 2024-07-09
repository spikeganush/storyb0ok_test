import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils/helper';
import TabArrowButton from './TabArrowButton';
import { TTabArrowProps } from './type';

const TabArrow = (props: TTabArrowProps) => {
  const { tabs, isMobile } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const divRef = useRef<HTMLDivElement[]>(new Array(tabs.length).fill(null) as any);

  const handleActiveTab = (index: number) => {
    setActiveTabIndex((prev) => (isMobile ? (prev === index ? -1 : index) : index));
  };

  const getRef = (element: HTMLDivElement, index: number) => {
    divRef.current[index] = element;
  };

  useEffect(() => {
    if (isMobile) {
      setActiveTabIndex(-1);
    } else {
      setActiveTabIndex(0);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && divRef.current && divRef.current[activeTabIndex]) {
      setDivHeight(divRef.current[activeTabIndex].scrollHeight);
    }
  }, [activeTabIndex, isMobile, tabs.length]);

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
            divHeight={divHeight}
            isMobile={isMobile}
            onClick={handleActiveTab}
          />
        ))}
      </div>

      <div className="absolute inset-0 block px-6 @[570px]:grid @[600px]:relative @[600px]:col-start-1 @[600px]:col-end-[-1] @[600px]:row-start-2 @[600px]:row-end-3 @[600px]:px-0 ">
        {tabs.map((tab, index) => (
          <div
            ref={(element) => getRef(element!, index)}
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
              height: isMobile ? (activeTabIndex === index ? `${divHeight}px` : '0') : 'auto',
              marginTop: isMobile ? (activeTabIndex === index ? `${index * 56 + 65}px` : '0') : '0',
            }}
          >
            {tab.subcontents.map((subcontent, subcontentIndex) => {
              const cols = 2; // Two columns layout
              const colStart = (subcontentIndex % cols) + 1;
              // const totalRows = Math.ceil(tab.subcontents.length / cols) * 3;
              const rowStart = Math.floor(subcontentIndex / cols) * 3 + 1;

              return (
                <div
                  className={cn(
                    'mb-4 w-full @[600px]:mb-0 @[600px]:grid @[600px]:grid-cols-subgrid @[600px]:grid-rows-subgrid',
                    {},
                  )}
                  key={`subcontent_${subcontentIndex}`}
                  style={{
                    gridColumn: isMobile ? 'unset' : `${colStart} / span 1`,
                    gridRowStart: isMobile ? 'unset' : `${rowStart}`,
                    gridRowEnd: isMobile ? 'unset' : `span 3`,
                  }}
                >
                  <h4 className="mb-2 text-[2.025rem] font-bold leading-[2.025rem] text-acu-purple-100 @[600px]:row-start-1 @[910px]:mb-4">
                    {subcontent.title}
                  </h4>
                  <p className="mb-2 text-acu-charcoal-100 @[600px]:row-start-2 @[910px]:mb-6">
                    {subcontent.content}
                  </p>
                  <a
                    href={subcontent.link.url}
                    className="mb-4 text-acu-red-100 after:ml-4 after:inline-block after:content-['→'] hover:underline focus-visible:underline @[600px]:row-start-3"
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
