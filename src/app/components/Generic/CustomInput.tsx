import React from 'react';

type CustomInputProps = {
  label?: string;
  name: string;
  placeholder: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time';
  required?: boolean;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
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
        className="acu-focus mb-8 w-full rounded-sm border border-gray-300 px-4 py-2"
        required={required}
      />
    </>
  );
};

export default CustomInput;
