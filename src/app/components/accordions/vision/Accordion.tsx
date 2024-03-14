import React, { useRef, useState } from 'react';
import { TAccordionProps } from './type';
import AccordionTitle from './AccordionTitle';

const Accordion = (props: TAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { accordion, leftPart } = props;
  const accordionImg = accordion.img;

  return (
    <div className={`flex-1 ${leftPart ? 'sm:flex-[4]' : ''}`}>
      <div className='border-t last-of-type:border-b border-gray-200 text-gray-700'>
        <AccordionTitle
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          accordion={accordion}
        />
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
