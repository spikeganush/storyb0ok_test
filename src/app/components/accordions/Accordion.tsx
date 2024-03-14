import { cn } from '../../utils/helper';
import React, { useRef, useState } from 'react';
import AccordionTitle from './AccordionTitle';

export type AccordionProps = {
  /**
   * Title of the accordion
   * @required
   * @type string
   */
  title: string;
  /**
   * Subtitle of the accordion
   * @required
   * @type string
   */
  subtitle: string;
  /**
   * Color of the subtitle
   * @optional
   * @type string
   */
  subtitleColor?: string;
  /**
   * Content of the accordion
   * @required
   * @type React.ReactNode
   */
  children: React.ReactNode;
};

const Accordion = ({ title, subtitle, subtitleColor, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleObject = { title, subtitle, subtitleColor };

  return (
    <div className="w-full">
      <AccordionTitle titleObject={titleObject} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[height] duration-500 ${isOpen ? 'h-auto' : 'h-0'}`}
        style={{
          height: isOpen ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
