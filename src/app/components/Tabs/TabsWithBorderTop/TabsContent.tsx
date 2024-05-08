import { cn } from '../../../utils/helper';
import React, { forwardRef } from 'react';

type TabsContentProps = {
  children: React.ReactNode;
  title: string;
  index: number;
  tabActiveIndex: number[];
  isMobile: boolean;
};

// eslint-disable-next-line react/display-name
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>((props, ref) => {
  const { children, index, tabActiveIndex, isMobile } = props;
  return (
    <div
      ref={ref}
      className={cn(
        'tab-content invisible col-start-1 col-end-2 row-start-2 row-end-3 mt-8 opacity-0 duration-500',
        {
          'visible opacity-100': tabActiveIndex.includes(index),
        },
      )}
    >
      {children}
    </div>
  );
});

export default TabsContent;
