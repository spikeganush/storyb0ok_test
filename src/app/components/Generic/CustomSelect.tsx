import { cn } from '@/app/utils/helper';
import React, { use, useEffect, useRef, useState } from 'react';

type SelectOption = {
  value: string;
  label: string;
  color?: string;
};

type CustomSelectProps = {
  options?: SelectOption[];
  defaultValue?: SelectOption;
  onChange?: (option: SelectOption) => void;
  name: string;
  id: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  onChange,
  name,
  id,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>(
    defaultValue || (options && options.length > 0 ? options[0] : { value: '', label: '' }),
  );
  const ulRef = useRef<HTMLUListElement>(null);
  const selectDivRef = useRef<HTMLDivElement>(null);

  const handleToggle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (
      (e.type === 'keydown' &&
        ((e as React.KeyboardEvent).key === 'Enter' ||
          (e as React.KeyboardEvent).key === 'Space' ||
          (e as React.KeyboardEvent).key === ' ')) ||
      e.type === 'click'
    ) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: SelectOption): void => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (selectDivRef.current && !selectDivRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={selectDivRef} className="relative inline-block w-full">
      <div
        className="acu-focus flex w-full cursor-pointer items-center justify-between rounded-sm border border-gray-300 bg-white px-4 py-2 text-left"
        onClick={(e) => handleToggle(e)}
        onKeyDown={(e) => handleToggle(e)}
        tabIndex={0}
      >
        {selectedOption && <span>{selectedOption.label}</span>}
        <span
          className={cn('font-semibold duration-300 icon-down-2', {
            'rotate-180 transform': isOpen,
          })}
        ></span>
      </div>
      <ul
        ref={ulRef}
        className={cn(
          'absolute z-10 mt-1 w-full overflow-hidden rounded-sm bg-white duration-500',
          {
            'border border-gray-300 py-1': isOpen,
          },
        )}
        style={{
          height: isOpen ? `${ulRef.current ? ulRef.current.scrollHeight : 0}px` : '0px',
        }}
      >
        {options?.map((option) => (
          <li
            key={option.value}
            className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
              option.value === selectedOption.value ? 'bg-blue-50' : ''
            }`}
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space' || e.key === ' ') {
                handleSelect(option);
              }
            }}
            tabIndex={isOpen ? 0 : -1}
          >
            <span
              className={cn('mr-2 inline-block h-2 w-2 rounded-full', {
                [option.color as string]: option.color,
              })}
            ></span>
            {option.label}
          </li>
        ))}
      </ul>
      <select
        name={name}
        id={id}
        value={selectedOption.value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const option = options?.find((opt) => opt.value === e.target.value);
          if (option) handleSelect(option);
        }}
        className="sr-only"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
