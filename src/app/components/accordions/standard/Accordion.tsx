import { cn } from '@/app/utils/helper';
import React, { useEffect, useRef, useState } from 'react';
import { TAccordionProps } from './type';
import Image from 'next/image';

const Accordion: React.FC<TAccordionProps> = ({
  content,
  title,
  onToggle,
  open = false,
  type = 'plus',
  index,
}) => {
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
    <div className="accordion">
      <div
        className={cn('acu-focus flex w-full cursor-pointer py-2', {
          'relative items-center justify-between border-t border-acu-black-30  px-4 duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-acu-black-30 after:duration-500':
            type === 'border',
          'border-t-0': type === 'border' && index === 0,
          'mb-4 after:left-4 after:right-4': type === 'border' && isOpen,
        })}
        onMouseDown={toggleAccordion}
        ref={titleRef}
        tabIndex={0}
      >
        {type === 'plus' && (
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
        )}
        <h3
          className={cn('text-[1.3725rem] font-bold text-acu-purple-100', {
            'font-normal text-acu-charcoal-120': type === 'border',
          })}
        >
          {title}
        </h3>
        {type === 'border' && (
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
                strokeWidth="0.9"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        )}
      </div>
      <div
        ref={contentRef}
        className={cn(
          'flex h-[-2rem] flex-col-reverse justify-between overflow-hidden transition-[height] duration-500 md:flex-row',
          {
            'h-auto': isOpen,
            'mb-4': type === 'border' && isOpen,
          },
        )}
        style={{
          height: isOpen ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px',
          marginTop: !isOpen && type === 'border' ? '-1px' : '0px',
        }}
      >
        {typeof content !== 'string' && content.links.length > 0 ? (
          <>
            <ul className={cn('w-full list-inside list-disc indent-4', {})}>
              {content.links.map((link, index) => (
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
            {content.image && (
              <div>
                <Image src={content.image} alt={title} width={200} height={200} />
              </div>
            )}
          </>
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: content as string }}
            className="accordion-content w-full list-inside list-disc px-4"
          />
        )}
      </div>
    </div>
  );
};

export default Accordion;
