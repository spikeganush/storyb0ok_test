import { cn } from '../../../utils/helper';
import React, { useEffect, useRef, useState } from 'react';
import AccordionTitle from './AccordionTitle';
import { TAccordionProps } from './type';

const Accordion = ({
  open = false,
  title,
  subtitle,
  subtitleColor,
  children,
  onToggle,
}: TAccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleObject = { title, subtitle, subtitleColor };
  const paddingInline = 'px-7';

  useEffect(() => {
    setIsOpen(open);
    onToggle && onToggle(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div className="mb-8 w-full shadow-accordion">
      <AccordionTitle
        titleObject={titleObject}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={paddingInline}
        onToggle={onToggle}
      />
      <div
        ref={contentRef}
        className={cn('h-[-2rem] overflow-hidden transition-[height] duration-500', {
          'h-auto': isOpen,
        })}
        style={{
          height: isOpen ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px',
        }}
      >
        {/* Separator */}
        <div className="h-[2px] w-full bg-acu-black-30" />
        <div className={cn('py-8', paddingInline)}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
