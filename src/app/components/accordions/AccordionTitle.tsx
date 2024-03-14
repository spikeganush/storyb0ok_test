import { cn } from '../../utils/helper';
import React, { useRef } from 'react';

const AccordionTitle = ({
  titleObject,
  isOpen,
  setIsOpen,
}: {
  titleObject: { title: string; subtitle: string; subtitleColor?: string };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { title, subtitle, subtitleColor } = titleObject;
  const titleRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (ref: React.RefObject<HTMLDivElement>) => {
    const titleDiv = ref.current;
    if (!titleDiv) return;
    titleDiv.blur();
    setIsOpen(!isOpen);
    if (!isOpen) {
      titleDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="dotted-focus group flex w-full cursor-pointer justify-between"
      onClick={() => toggleAccordion(titleRef)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          toggleAccordion(titleRef);
        }
      }}
      tabIndex={0}
      ref={titleRef}
    >
      <div className="">
        <h1 className="text-2xl font-bold text-acu-purple-100 group-hover:underline">{title}</h1>
        <h2 className={cn('text-base font-semibold text-acu-black-80', subtitleColor)}>
          {subtitle}
        </h2>
      </div>
      <div className="chevron">
        <svg
          className={cn('h-6 w-6 duration-500', isOpen ? 'rotate-180 transform' : '')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AccordionTitle;
