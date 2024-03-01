import Image from 'next/image';
import React, { useState, useRef } from 'react';

type Paragraph = {
  bold?: boolean;
  text: string;
};

type LeftPart = {
  title: string;
  subtitle: string;
  img?: string;
};

type AccordionItem = {
  img?: string;
  title: string;
  subtitle: string;
  paragraphs: Paragraph[];
};

type AccordionProps = {
  leftPart: LeftPart;
  accordions: AccordionItem[];
};

const AccordionItem = ({ img, title, subtitle, paragraphs }: AccordionItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-t last-of-type:border-b border-gray-200 text-gray-700'>
      <div
        className='w-full py-5  text-left focus:outline-none'
        onClick={toggleAccordion}
      >
        <div className='flex justify-between items-start w-full'>
          <div className='flex'>
            {img && (
              <Image
                alt='Accordion Icon'
                src={img}
                width={70}
                height={70}
                className='w-[70px] aspect-square mr-6'
              />
            )}
            <div className='title'>
              <h2 className='text-4xl text-purple-100 font-bold'>{title}</h2>
              <h3 className='text-2xl font-miller my-2'>{subtitle}</h3>
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
        <div className='content ml-[94px] max-w-[67ch]'>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`leading-6 text-acu-gray last-of-type:mb-6 ${
                paragraph.bold ? 'font-semibold' : 'font-normal'
              }`}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ leftPart, accordions }: AccordionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='container mx-auto'>
      <div className=' px-4 flex flex-col sm:flex-row gap-12 text-gray-700'>
        <div className='left__accordion-part flex-1'>
          <h2 className='text-purple-100 text-4xl font-bold mb-3'>
            {leftPart.title}
          </h2>
          <p className='font-miller text-xl max-w-[45ch] sm:max-w-[17ch]'>
            {leftPart.subtitle}
          </p>
          {leftPart.img && (
            <Image
              src={leftPart.img}
              alt='Our foundations chart is a circular chart with 3 rings circulating around a centred circle with the word ‘Mission’ prominent in gold on a white background. The first inner ring has the following terms on a warm red background: ‘Flourishing lives’, ‘Thriving communities’ and ‘Ethical future’. The second ring has the following terms on a cool purple background: ‘Partners’, ‘People’, ‘Culture’, ‘Infrastructure’. The tertiary and outer ring has the following terms in a dark colour on a light creamy brown background: ‘Holistic education’, ‘Collaborative engagement’, ‘High-impact research’, and ‘Global connection’.'
              width={288}
              height={288}
              className='mt-6 cursor-pointer w-[300px] sm:w-full aspect-square'
              onClick={() => setIsModalOpen(true)}
            />
          )}
        </div>
        <div className='flex-1 sm:flex-[4]'>
          {accordions.map((accordion, index) => (
            <AccordionItem
              key={index}
              img={accordion.img}
              title={accordion.title}
              subtitle={accordion.subtitle}
              paragraphs={accordion.paragraphs}
            />
          ))}
        </div>
      </div>
      {leftPart.img && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            isModalOpen
              ? 'opacity-0 sm:opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsModalOpen(false)}
        >
          <div className='fixed inset-0 flex justify-center items-center'>
            <Image
              src={leftPart.img}
              alt='Our foundations chart is a circular chart with 3 rings circulating around a centred circle with the word ‘Mission’ prominent in gold on a white background. The first inner ring has the following terms on a warm red background: ‘Flourishing lives’, ‘Thriving communities’ and ‘Ethical future’. The second ring has the following terms on a cool purple background: ‘Partners’, ‘People’, ‘Culture’, ‘Infrastructure’. The tertiary and outer ring has the following terms in a dark colour on a light creamy brown background: ‘Holistic education’, ‘Collaborative engagement’, ‘High-impact research’, and ‘Global connection’.'
              width={700}
              height={700}
              className='cursor-pointer bg-white rounded-2xl p-2 w-[700px] h-[700px] object-cover object-center'
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Accordion;
