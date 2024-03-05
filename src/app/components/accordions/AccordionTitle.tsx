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
      className='w-full py-5 text-left focus:outline-dotted outline-2 outline-offset-4 outline-acu-purple-100 cursor-pointer'
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
      <div className='flex justify-between items-start w-full'>
        <div className='flex'>
          {accordionImg && (
            <Image
              alt='Accordion Icon'
              src={accordionImg}
              width={70}
              height={70}
              className='w-[70px] aspect-square mr-6'
            />
          )}
          <div className='title'>
            <h2
              className={`${accordionImg ? 'text-4xl text-acu-purple-100' : 'text-2xl text-acu-red-100'} font-bold`}
            >
              {accordion.title}
            </h2>
            <h3
              className={`${accordionImg ? 'text-2xl font-miller my-2' : 'text-[2.025rem] leading-8 text-acu-purple-100 font-bold min-w-[90%] max-w-[770px]'}`}
            >
              {accordion.subtitle}
            </h3>
          </div>
        </div>
        <span
          className={`text-2xl font-bold transform transition-transform duration-300 ${
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
