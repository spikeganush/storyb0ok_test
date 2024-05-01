import Image from 'next/image';
import React from 'react';
import TabArrow from './TabArrow';

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

  return (
    <div className="@container">
      <div className="grid grid-cols-1 @lg:grid-rows-[650px_100px_auto] @3xl:grid-rows-[510px_240px_auto] ">
        <div className="col-start-1 col-end-[-1] row-start-1 row-end-3">
          <Image
            width={1255}
            height={630}
            alt={leftTab.title}
            src={image}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="col-start-1 col-end-[-1] row-start-2 row-end-4 mx-auto flex w-full flex-col px-5 @[998px]:w-10/12 @[998px]:flex-row">
          <div className="w-full bg-acu-black-15 px-8 pb-4 pt-16 @[998px]:w-1/3 @[998px]:[clip-path:polygon(0_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%)]">
            <h2 className="mb-4 text-[2.625rem] font-bold leading-none text-acu-purple-100">
              {leftTab.title}
            </h2>
            <p className="text-base text-acu-black-80">{leftTab.content}</p>
          </div>
          <div className="mt-16 w-full bg-acu-white p-12 pb-0 @[998px]:w-2/3">
            <TabArrow tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsWithBg;
