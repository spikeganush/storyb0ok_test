import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import TabArrow from './TabArrow';
import { rgbDataURL } from '../../utils/helper';
import { useContainerBreakpoint } from '@/app/utils/useIsMobile';

export type TLeftTab = {
  title: string;
  content: string;
};

export type TSubcontent = {
  title: string;
  content: string;
  link: {
    text: string;
    url: string;
  };
};

export type TTab = {
  title: string;
  subcontents: TSubcontent[];
};

export type TTabsWithBgProps = {
  image: string;
  leftTab: TLeftTab;
  tabs: TTab[];
};

const TabsWithBg = (props: TTabsWithBgProps) => {
  const { leftTab, tabs, image } = props;
  const devRef = useRef<HTMLDivElement>(null);
  const [devRefEffect, setDevRefEffect] = useState<HTMLDivElement | null>(null);
  const { isMobile } = useContainerBreakpoint(600, devRefEffect);

  useEffect(() => {
    setDevRefEffect(devRef.current);
  }, [devRef]);

  return (
    <div ref={devRef} className="@container">
      <div className="grid grid-cols-1 @[200px]:grid-rows-[150px_50px_auto] @[350px]:grid-rows-[200px_50px_auto] @[500px]:grid-rows-[260px_50px_auto] @[640px]:grid-rows-[350px_75px_auto] @[825px]:grid-rows-[525px_75px_auto] @[998px]:grid-rows-[510px_240px_auto]">
        <div className="col-start-1 col-end-[-1] row-start-1 row-end-3">
          <Image
            width={1255}
            height={630}
            alt={leftTab.title}
            src={image}
            className="h-full w-full object-cover object-center"
            unoptimized
            placeholder="blur"
            blurDataURL={rgbDataURL(108, 108, 108)}
          />
        </div>
        <div className="col-start-1 col-end-[-1] row-start-2 row-end-4 mx-auto flex w-full flex-col px-5 @[998px]:w-11/12 @[998px]:flex-row @[1200px]:w-10/12">
          <div className="h-max w-full bg-acu-black-15 px-8 pb-4 pt-4 @[998px]:w-1/3 @[998px]:pt-16 @[998px]:[clip-path:polygon(0_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%)]">
            <h2 className="mb-4 text-[2.625rem] font-bold leading-none text-acu-purple-100">
              {leftTab.title}
            </h2>
            <p className="text-base text-acu-black-80">{leftTab.content}</p>
          </div>
          <div className="relative mt-8 w-full bg-acu-white @[998px]:mt-16 @[998px]:w-2/3 @[998px]:p-12 @[998px]:pb-0">
            <TabArrow tabs={tabs} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsWithBg;
