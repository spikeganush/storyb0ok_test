import React from 'react';
import { TUnitInfoProps } from './type';

const UnitInfo = (props: TUnitInfoProps) => {
  const { completionText, units } = props;
  return (
    <>
      <span className="mb-4 block text-acu-charcoal-100">{completionText}</span>
      <div className="w-full px-8 shadow-accordion">
        <ul className="w-full text-acu-charcoal-100">
          {units &&
            units.map((unit, index) => (
              <li
                key={index}
                className="grid-cols-unit-info relative grid py-5 after:absolute after:-left-8 after:-right-8 after:bottom-0 after:h-[1px] after:bg-acu-black-40 after:content-[''] last-of-type:after:hidden"
              >
                <a
                  href={unit.linkUrl}
                  className="text-acu-purple-100 underline hover:text-acu-red-100 hover:no-underline"
                >
                  {unit.code}
                </a>
                <span>{unit.title}</span>
                <span className="justify-self-end">{unit.creditPoints}</span>
                {unit.note && (
                  <p className="col-start-2 mt-3 before:block before:font-semibold before:text-acu-charcoal-120 before:content-['Notes:']">
                    {unit.note}
                  </p>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default UnitInfo;
