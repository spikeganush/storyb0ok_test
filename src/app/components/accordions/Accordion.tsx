import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { TAccordionProps } from './type';

const Accordion = (props: TAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { accordion, leftPart } = props;
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
    <div className={`flex-1 ${leftPart ? 'sm:flex-[4]' : ''}`}>
      <div className='border-t last-of-type:border-b border-gray-200 text-gray-700'>
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
        <div
          ref={contentRef}
          className={`transition-[height] duration-500 overflow-hidden ${
            isOpen ? 'h-auto' : 'h-0'
          }`}
          style={{
            height: isOpen
              ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px`
              : '0px',
          }}
        >
          <div
            className={`content ${accordionImg ? 'ml-[94px]' : ''} max-w-[67ch]`}
          >
            {accordion.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-6 text-acu-gray mb-3 last-of-type:mb-6 ${
                  paragraph.bold
                    ? accordionImg
                      ? 'font-semibold'
                      : 'font-semibold text-acu-purple-100'
                    : 'font-normal'
                }`}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
