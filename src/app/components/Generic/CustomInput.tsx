import { cn } from '@/app/utils/helper';
import { s } from 'million/dist/shared/million.9d4df3c1.js';
import React from 'react';

type CustomInputProps = {
  label?: string;
  name: string;
  placeholder: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time';
  required?: boolean;
  style?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
  style = '',
}) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="mb-2 block font-semibold">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn('acu-focus mb-8 w-full rounded-sm border border-gray-300 px-4 py-2', {
          [style]: style,
        })}
        required={required}
      />
    </>
  );
};

export default CustomInput;
