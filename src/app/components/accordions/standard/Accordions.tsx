import React, { useEffect, useRef, useState } from 'react';
import Accordion from './Accordion';
import { TAccordionsProps } from './type';
import { cn } from '@/app/utils/helper';

const Accordions = (props: TAccordionsProps) => {
  const { accordion, type = 'plus' } = props;
  const divOpenAllRef = useRef<HTMLDivElement>(null);
  const [buttonText, setButtonText] = useState(type === 'plus' ? 'Expand All' : 'Open all');

  // Initialize `childrenOpen` state to match each accordion's `open` prop if provided, or default to false.
  const initialOpenStates = accordion.reduce(
    (states, _, index) => ({
      ...states,
      [index]: accordion[index].open || false,
    }),
    {},
  );

  const [childrenOpen, setChildrenOpen] = useState<{ [key: number]: boolean }>(initialOpenStates);

  // Update button text based on accordion states.
  useEffect(() => {
    const someOpen = Object.values(childrenOpen).some((state) => state);
    setButtonText(
      someOpen
        ? type === 'plus'
          ? 'Collapse All'
          : 'Close all'
        : type === 'plus'
          ? 'Expand All'
          : 'Open all',
    );
  }, [childrenOpen]);

  const toggleAllAccordions = (open: boolean) => {
    setChildrenOpen(
      Object.keys(childrenOpen).reduce(
        (acc, key) => ({
          ...acc,
          [key]: open,
        }),
        {},
      ),
    );
  };

  const handleOpenAll = () => {
    const newState = buttonText === 'Expand All' || buttonText === 'Open all';
    toggleAllAccordions(newState);
  };

  const handleAccordionToggle = (index: number, isOpen: boolean) => {
    setChildrenOpen((prev) => ({ ...prev, [index]: isOpen }));
  };

  return (
    <>
      <div className="mb-4 flex flex-1 justify-end">
        <div
          className={cn(
            'acu-focus cursor-pointer font-semibold text-acu-purple-100 underline underline-offset-2 hover:text-acu-red-100 hover:no-underline focus:text-acu-red-100 focus:no-underline',
            {
              'border border-acu-red-100 p-2 text-acu-red-100 no-underline': type === 'border',
            },
          )}
          onMouseDown={handleOpenAll}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
              handleOpenAll();
            }
          }}
          tabIndex={0}
          ref={divOpenAllRef}
        >
          {buttonText}
        </div>
      </div>
      <div
        className={cn('accordion-container', {
          'border border-acu-black-30': type === 'border',
        })}
      >
        {accordion.map((props, index) => (
          <Accordion
            key={index}
            {...props}
            open={childrenOpen[index]}
            onToggle={(isOpen) => handleAccordionToggle(index, isOpen)}
            type={type}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Accordions;
