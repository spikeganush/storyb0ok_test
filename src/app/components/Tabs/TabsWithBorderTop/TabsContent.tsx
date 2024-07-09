import { contentMarginBottom } from '../../../utils/constants';
import { cn } from '../../../utils/helper';
import React, { forwardRef } from 'react';
import { TabsContentProps } from './type';

// eslint-disable-next-line react/display-name
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>((props, ref) => {
  const { children, refes, index, tabActiveIndex, isMobile } = props;

  const calculateTopPosition = () => {
    let totalHeight = 0;
    const accordionHeaderHeight = 56;
    for (let i = -1; i < index; i++) {
      if (refes[index]) {
        totalHeight += accordionHeaderHeight;
        if (tabActiveIndex.includes(i)) {
          totalHeight += refes[i].scrollHeight + contentMarginBottom;
        }
      }
    }

    return totalHeight;
  };

  const topPosition = isMobile ? calculateTopPosition() : 'unset';
  const isVisible = tabActiveIndex.includes(index);

  return (
    <div
      ref={ref}
      className={cn(
        'tab-content invisible col-start-1 col-end-2 row-start-2 row-end-3 mt-8 opacity-0 duration-500',
        {
          'visible opacity-100': tabActiveIndex.includes(index),
          'absolute mt-4 px-4': isMobile,
        },
      )}
      style={{
        top: topPosition,
        height: isMobile && isVisible ? refes[index]?.scrollHeight : isMobile ? 0 : 'unset',
      }}
    >
      {children}
    </div>
  );
});

export default TabsContent;
