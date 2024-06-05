import React from 'react';
import { TThreeColumnsWithPanelStats } from './ThreeColumnsWithPanel';
import ButtonCTA from '@/app/components/Buttons/CTA';
import { cn } from '@/app/utils/helper';

const ThreeColumnsWithPanelStats = ({ title, stats, link }: TThreeColumnsWithPanelStats) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-acu-purple-100">{title}</h1>
      <div className="flex flex-wrap">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn('w-full p-4 pl-0 sm:w-1/2 sm:pl-4', {
              'sm:pl-0 sm:pr-8': index % 2 === 0,
            })}
          >
            <div className="flex items-baseline md:justify-between">
              <div className="mr-4 flex flex-col md:mr-2">
                <h2 className="text-base font-bold leading-none text-acu-purple-100">
                  {stat.title}
                </h2>
                <p className="mt-4 text-4xl font-bold text-acu-purple-100">
                  {stat.value.includes('%') ? (
                    <>
                      {stat.value.split('%')[0]}
                      <span className="text-base">%</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
              <p className="text-lg leading-none text-acu-purple-100 md:text-right">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
        <div className="w-full sm:w-1/2 sm:p-4 lg:pr-4">
          <ButtonCTA
            text={link.text}
            url={link.url}
            type="arrow"
            style="text-lg after:text-acu-red-100 after:content-['\2192'] mt-[0] block leading-none"
          />
        </div>
      </div>
    </>
  );
};

export default ThreeColumnsWithPanelStats;
