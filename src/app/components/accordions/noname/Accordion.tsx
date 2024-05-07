import { cn } from '../../../utils/helper';
import React, { useEffect, useRef, useState } from 'react';
import { TAccordionProps } from './type';
import Image from 'next/image';

const Accordion = (props: TAccordionProps) => {
  const { links, title, image, onToggle, open = false } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
    onToggle && onToggle(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    onToggle && onToggle(!isOpen);
  };

  return (
    <div>
      <div
        className={cn('acu-focus flex w-full cursor-pointer py-2')}
        onMouseDown={toggleAccordion}
        ref={titleRef}
        tabIndex={0}
      >
        <span
          className={cn(
            'mr-3 w-4 transform text-2xl font-bold leading-none transition-transform duration-300',
            {
              'rotate-180': isOpen,
            },
          )}
        >
          {isOpen ? '-' : '+'}
        </span>
        <h3 className={cn('text-[1.3725rem] font-bold text-acu-purple-100')}>{title}</h3>
      </div>
      <div
        ref={contentRef}
        className={cn(
          'flex h-[-2rem] flex-col-reverse justify-between overflow-hidden transition-[height] duration-500 md:flex-row',
          {
            'h-auto': isOpen,
          },
        )}
        style={{
          height: isOpen ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px',
        }}
      >
        <ul className={cn('w-full list-inside list-disc indent-4', {})}>
          {links.map((link, index) => (
            <li key={index} className="small-marker">
              <a
                href={link.url}
                className="text-acu-red-100 hover:underline"
                tabIndex={isOpen ? 0 : -1}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        {image && (
          <div>
            <Image src={image} alt={title} width={200} height={200} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
