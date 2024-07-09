import React, { useEffect, useRef, useState } from 'react';
import TabsButton from './TabsButton';
import { useContainerBreakpoint } from '@/app/utils/useIsMobile';
import { cn } from '../../../utils/helper';
import { TabsWithBorderTopProps } from './type';

const TabsWithBorderTop = ({ tabs }: TabsWithBorderTopProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divRefCurrent, setDivRefCurrent] = useState<HTMLDivElement | null>(null);
  const { isMobile } = useContainerBreakpoint(598, divRefCurrent);

  useEffect(() => {
    setDivRefCurrent(divRef.current);
  }, [divRef]);

  return (
    <div
      ref={divRef}
      className={cn('relative block @container', {
        'grid w-full grid-rows-[repeat(2,_auto)]': !isMobile,
      })}
    >
      <TabsButton tabs={tabs} isMobile={isMobile} />
    </div>
  );
};

export default TabsWithBorderTop;
