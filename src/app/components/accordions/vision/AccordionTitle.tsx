import Image from 'next/image';
import React, { useRef } from 'react';
import { TAccordionItem } from './type';

const AccordionTitle = ({
  isOpen,
  setIsOpen,
  accordion,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  accordion: TAccordionItem;
}) => {
  const titleRef = useRef<HTMLDivElement>(null);

  const accordionImg = accordion.img;

  const toggleAccordion = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

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
      className="dotted-focus w-full cursor-pointer py-5 text-left focus:outline-dotted"
      onClick={(e) => toggleAccordion(e, titleRef)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          toggleAccordion(e, titleRef);
        }
      }}
      tabIndex={0}
      ref={titleRef}
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex">
          {accordionImg && (
            <Image
              alt="Accordion Icon"
              src={accordionImg}
              width={70}
              height={70}
              className="mr-6 aspect-square w-[70px]"
            />
          )}
          <div className="title">
            <h2
              className={`${accordionImg ? 'text-4xl text-acu-purple-100' : 'text-2xl text-acu-red-100'} font-bold`}
            >
              {accordion.title}
            </h2>
            <h3
              className={`${accordionImg ? 'my-2 font-miller text-2xl' : 'min-w-[90%] max-w-[770px] text-[2.025rem] font-bold leading-8 text-acu-purple-100'}`}
            >
              {accordion.subtitle}
            </h3>
          </div>
        </div>
        <span
          className={`transform text-2xl font-bold transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? '-' : '+'}
        </span>
      </div>
    </div>
  );
};

export default AccordionTitle;
