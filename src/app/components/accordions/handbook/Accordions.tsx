import React, { useEffect, useState, useRef } from 'react';
import { TAccordionsProps } from './type';
import Accordion from './Accordion';

const Accordions = (props: TAccordionsProps) => {
  const { title, accordion } = props;
  const divOpenAllRef = useRef<HTMLDivElement>(null);
  const [buttonText, setButtonText] = useState('Open All');

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
    setButtonText(someOpen ? 'Close All' : 'Open All');
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
    const newState = buttonText === 'Open All';
    toggleAllAccordions(newState);
  };

  const handleAccordionToggle = (index: number, isOpen: boolean) => {
    setChildrenOpen((prev) => ({ ...prev, [index]: isOpen }));
  };

  return (
    <>
      <div className="mb-8 flex flex-1 items-start justify-between">
        <div className="text-4xl font-bold text-acu-purple-100">{title}</div>
        <div
          className="acu-focus cursor-pointer font-semibold text-acu-purple-100 underline underline-offset-2 hover:text-acu-red-100 hover:no-underline focus:text-acu-red-100 focus:no-underline"
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
      {accordion.map((prop, index) => (
        <Accordion
          key={index}
          {...prop}
          open={childrenOpen[index]}
          onToggle={(isOpen) => handleAccordionToggle(index, isOpen)}
        />
      ))}
    </>
  );
};

export default Accordions;
