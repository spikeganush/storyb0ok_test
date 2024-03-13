import { cn } from '../../utils/helper';
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
  return (
    <section className="container relative mx-auto px-5 py-[4.375rem] @container/main">
      {topSeparator && <div className="absolute left-5 right-5 top-0 h-[1px] bg-gray-400" />}
      <div className="flex flex-col @[728px]/main:flex-row @[728px]/main:space-x-20">
        <div className="relative flex-1 @[728px]/main:flex-[2]">
          <div className="absolute -right-[1.9rem] top-0 hidden h-full w-[1px] bg-gray-400 @[728px]/main:inline" />
          {/* Left content */}
          <Image src={left.img} alt={left.imgAlt} width={100} height={100} />
          <h2 className={cn('text-3xl font-bold text-acu-purple-100', left.titleColor)}>
            {left.title}
          </h2>
          <h3 className={cn('pb-0 pt-2 text-[1.3rem] font-bold', left.subTitleColor)}>
            {left.subTitle}
          </h3>
          <p className={cn('text-acu-black-80', left.contentColor)}>{left.content}</p>
        </div>
        <div className="mt-6 flex-1 @[728px]/main:mt-0 @[728px]/main:flex-[4] @[1240px]/main:flex-[5]">
          {/* Right content */}
          <Image src={right.img} alt={right.imgAlt} width={100} height={100} />
          <h2 className={cn('text-3xl font-bold text-acu-purple-100', right.titleColor)}>
            {right.title}
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {right.content.map((content, index) => (
              <div key={index} className="flex-1">
                <h3
                  className={cn(
                    'pt-2 text-[1.3rem] font-bold text-acu-gold',
                    right.contentTitleColor,
                  )}
                >
                  {content.title}
                </h3>
                <p className={cn('text-acu-black-80', right.contentColor)}>{content.content}</p>
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
