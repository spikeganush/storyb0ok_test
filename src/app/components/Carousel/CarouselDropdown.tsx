import { cn } from '../../utils/helper';
import React, { useEffect, useRef, useState } from 'react';

const CarouselDropdown = ({
  tags,
  selectedTag,
  onSelectTag,
}: {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full md:hidden">
      <button
        className="bg-acu-gray-100 flex w-full justify-between border border-black px-4 py-2 text-left text-sm font-semibold "
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedTag || 'All tags'}
        <svg
          height="20px"
          width="20px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#010002"
          viewBox="0 0 185.344 185.344"
          className={cn('duration-300', {
            'rotate-180': isOpen,
          })}
        >
          <path
            d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
			c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
			c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={cn(
          'absolute left-0 z-10 h-0 w-full overflow-hidden border border-black bg-white transition-[height]',
          {
            'h-auto': isOpen,
            'border-0': !isOpen,
          },
        )}
        style={{
          height: isOpen ? `${contentRef.current ? contentRef.current.scrollHeight : 0}px` : '0px',
        }}
      >
        {tags.map((tag, index) => (
          <div
            tabIndex={0}
            key={index}
            onClick={() => {
              onSelectTag(tag);
              setIsOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
                e.preventDefault();
                onSelectTag(tag);
                setIsOpen(false);
              }
            }}
            className="cursor-pointer border-b-2 px-4 py-2 text-left text-sm font-bold last-of-type:border-b-0 hover:bg-acu-red-100 hover:text-acu-white"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselDropdown;
