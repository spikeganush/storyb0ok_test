import React, { useEffect, useRef, useState } from 'react';
import Accordion from './Accordion';
import { handleEventAndBlur } from '@/app/utils/helper';
import { TAccordionsProps } from './type';

const Accordions = (props: TAccordionsProps) => {
  const { accordion } = props;
  const divOpenAllRef = useRef<HTMLDivElement>(null);
  const [buttonText, setButtonText] = useState('Expand All');

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
    setButtonText(someOpen ? 'Collapse All' : 'Expand All');
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

  const handleOpenAll = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    handleEventAndBlur(e, ref, () => {
      const newState = buttonText === 'Expand All';
      toggleAllAccordions(newState);
    });
  };

  const handleAccordionToggle = (index: number, isOpen: boolean) => {
    setChildrenOpen((prev) => ({ ...prev, [index]: isOpen }));
  };

  return (
    <>
      <div className="mb-4 flex flex-1 justify-end">
        <div
          className="dotted-focus cursor-pointer font-semibold text-acu-purple-100 underline underline-offset-2 hover:text-acu-red-100 hover:no-underline focus:text-acu-red-100 focus:no-underline"
          onMouseDown={(e) => handleOpenAll(e, divOpenAllRef)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
              handleOpenAll(e, divOpenAllRef);
            }
          }}
          tabIndex={0}
          ref={divOpenAllRef}
        >
          {buttonText}
        </div>
      </div>
      {accordion.map((props, index) => (
        <Accordion
          key={index}
          {...props}
          open={childrenOpen[index]}
          onToggle={(isOpen) => handleAccordionToggle(index, isOpen)}
        />
      ))}
    </>
  );
};

export default Accordions;
