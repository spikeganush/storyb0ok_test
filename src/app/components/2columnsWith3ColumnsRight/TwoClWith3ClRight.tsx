import Image from 'next/image';
import React from 'react';

type RightContent = {
  title: string;
  content: string;
};

export type TwoClWith3ClRightProps = {
  topSeparator?: boolean;
  bottomSeparator?: boolean;
  left: {
    img: string;
    imgAlt: string;
    title: string;
    titleColor?: string;
    subTitle: string;
    subTitleColor?: string;
    content: string;
    contentColor?: string;
  };
  right: {
    img: string;
    imgAlt: string;
    title: string;
    titleColor?: string;
    contentTitleColor?: string;
    contentColor?: string;
    content: [RightContent, RightContent, RightContent];
  };
};

const TwoClWith3ClRight = ({
  left,
  right,
  topSeparator,
  bottomSeparator,
}: TwoClWith3ClRightProps) => {
  // Default colors for left content
  const defaultColors = {
    titleColor: 'text-acu-purple-100',
    subTitleColor: 'text-acu-purple-100',
    contentColor: 'text-acu-black-80',
  };
  const mergedLeft = {
    ...defaultColors,
    ...left,
    titleColor:
      left.titleColor === 'original' || !left.titleColor
        ? defaultColors.titleColor
        : left.titleColor,
    subTitleColor:
      left.subTitleColor === 'original' || !left.subTitleColor
        ? defaultColors.subTitleColor
        : left.subTitleColor,
    contentColor:
      left.contentColor === 'original' || !left.contentColor
        ? defaultColors.contentColor
        : left.contentColor,
  };
  const { titleColor, subTitleColor, contentColor } = mergedLeft;

  const mergedContentRight = {
    rightTitleColor:
      right.titleColor === 'original' || !right.titleColor
        ? defaultColors.titleColor
        : right.titleColor,
    rightContentTitleColor:
      right.contentTitleColor === 'original' || !right.contentTitleColor
        ? 'text-acu-gold'
        : right.contentTitleColor,
    rightContentColor:
      right.contentColor === 'original' || !right.contentColor
        ? defaultColors.contentColor
        : right.contentColor,
  };

  const { rightTitleColor, rightContentTitleColor, rightContentColor } = mergedContentRight;

  return (
    <section className="container relative mx-auto px-5 py-[4.375rem] @container/main">
      {topSeparator && <div className="absolute left-5 right-5 top-0 h-[1px] bg-gray-400" />}
      <div className="flex flex-col @[728px]/main:flex-row @[728px]/main:space-x-20">
        <div className="relative flex-1 @[728px]/main:flex-[2]">
          <div className="absolute -right-[1.9rem] top-0 hidden h-full w-[1px] bg-gray-400 @[728px]/main:inline" />
          {/* Left content */}
          <Image src={left.img} alt={left.imgAlt} width={100} height={100} />
          <h2 className={`text-3xl font-bold ${titleColor}`}>{left.title}</h2>
          <h3 className={`pb-0 pt-2 text-[1.3rem] font-bold ${subTitleColor}`}>{left.subTitle}</h3>
          <p className={`${contentColor}`}>{left.content}</p>
        </div>
        <div className="mt-6 flex-1 @[728px]/main:mt-0 @[728px]/main:flex-[4] @[1240px]/main:flex-[5]">
          {/* Right content */}
          <Image src={right.img} alt={right.imgAlt} width={100} height={100} />
          <h2 className={`text-3xl font-bold ${rightTitleColor || 'text-acu-purple-100'}`}>
            {right.title}
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {right.content.map((content, index) => (
              <div key={index} className="flex-1">
                <h3 className={`pt-2 text-[1.3rem] font-bold ${rightContentTitleColor}`}>
                  {content.title}
                </h3>
                <p className={`${rightContentColor}`}>{content.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {bottomSeparator && <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gray-400" />}
    </section>
  );
};

export default TwoClWith3ClRight;
