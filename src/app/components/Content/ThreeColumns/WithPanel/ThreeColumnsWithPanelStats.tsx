import React from 'react';
import { TThreeColumnsWithPanelStats } from './ThreeColumnsWithPanel';
import ButtonCTA from '@/app/components/Buttons/CTA';

const ThreeColumnsWithPanelStats = ({ title, stats, link }: TThreeColumnsWithPanelStats) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-acu-purple-100">{title}</h1>
      <div className="flex flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className=" w-full p-4 sm:w-1/2">
            <div className="flex items-baseline md:justify-between">
              <div className="mr-4 flex flex-col md:mr-2">
                <h2 className="text-right text-2xl font-bold leading-none text-acu-purple-100">
                  {stat.title}
                </h2>
                <p className="mt-4 text-right text-4xl font-bold text-acu-purple-100">
                  {stat.value.includes('%') ? (
                    <>
                      {stat.value.split('%')[0]}
                      <span className="text-xl">%</span>
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
        <div className="w-full p-4 pr-8 sm:w-1/2 lg:pr-[unset]">
          <ButtonCTA text={link.text} url={link.url} type="arrow" />
        </div>
      </div>
    </>
  );
};

export default ThreeColumnsWithPanelStats;
