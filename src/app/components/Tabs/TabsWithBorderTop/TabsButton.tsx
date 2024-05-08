import React, { useEffect, useRef, useState } from 'react';
import TabsContent from './TabsContent';
import { cn } from '../../../utils/helper';

export type TabsButtonProps = {
  tabs: {
    title: string;
    children: React.ReactNode;
  }[];
  isMobile: boolean;
};

const TabsButton = ({ tabs, isMobile }: TabsButtonProps) => {
  const [tabActiveIndex, setTabActiveIndex] = useState<number[]>([]);
  const divRef = useRef<HTMLDivElement[]>(new Array(tabs.length).fill(null) as any);

  const getRef = (element: HTMLDivElement, index: number) => {
    divRef.current[index] = element;
  };

  const handleTabClick = (index: number) => {
    if (isMobile) {
      setTabActiveIndex((prev) => {
        if (prev.includes(index)) {
          return prev.filter((i) => i !== index);
        }
        return [...prev, index];
      });
    } else {
      setTabActiveIndex(() => [index]);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setTabActiveIndex([]);
    } else {
      setTabActiveIndex([0]);
    }
  }, [isMobile]);

  return (
    <>
      <ul
        className={cn('button box-content flex flex-1 flex-col', {
          'flex-row border-b-2 border-acu-purple-100': !isMobile,
          'border border-acu-black-30': isMobile,
        })}
        role="tablist"
      >
        {tabs?.length > 0 &&
          tabs.map((tab, index) => (
            <div
              key={index}
              className={cn(
                'mb-0 rounded-t-[0.25rem] rounded-tr-[0.25rem] border-acu-black-30 bg-acu-white duration-500',
                {
                  'mb-[-2px] border-acu-purple-100': tabActiveIndex.includes(index) && !isMobile,
                  'border-l-2 border-r-2 border-t-8 hover:border-acu-purple-100': !isMobile,
                },
              )}
              style={{
                marginBottom: isMobile
                  ? tabActiveIndex.includes(index)
                    ? divRef.current[index].scrollHeight
                    : '0'
                  : 'auto',
              }}
            >
              <li
                onClick={() => handleTabClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    handleTabClick(index);
                  }
                }}
                role="tab"
                tabIndex={0}
                className={cn(
                  'acu-focus last-of-type:mr-0" cursor-pointer px-4 py-2 font-semibold text-acu-charcoal-100',
                  {
                    'text-acu-purple-120': tabActiveIndex.includes(index) && !isMobile,
                    'flex justify-between border-b border-r-0 py-4 font-bold text-acu-charcoal-120':
                      isMobile,
                    'last-of-type:border-b': tabActiveIndex.includes(index) && isMobile,
                  },
                )}
              >
                <span className={cn('inline-block', {})}>{tab.title}</span>
              </li>
            </div>
          ))}
      </ul>
      {tabs?.length > 0 &&
        tabs.map((tab, index) => (
          <React.Fragment key={index}>
            <TabsContent
              ref={(element) => getRef(element!, index)}
              title={tab.title}
              index={index}
              tabActiveIndex={tabActiveIndex}
              isMobile={isMobile}
            >
              {tab.children}
            </TabsContent>
          </React.Fragment>
        ))}
    </>
  );
};

export default TabsButton;
