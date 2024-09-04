import { cn } from '@/app/utils/helper';
import React, { useEffect, useRef } from 'react';

export type ColorKey = {
  color: string;
  label: string;
};

type ColorKeyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const colorKeys: ColorKey[] = [
  { color: 'bg-acu-red-100', label: 'Due today (Red)' },
  { color: 'bg-acu-schedule-light-blue', label: 'Lecture (light blue)' },
  { color: 'bg-acu-schedule-orange', label: 'Tutorial (orange)' },
  { color: 'bg-acu-schedule-light-green', label: 'Practical (light green)' },
  { color: 'bg-acu-schedule-dark-purple', label: 'Seminar (dark purple)' },
  { color: 'bg-acu-schedule-dark-megenta', label: 'Intensive (dark megenta)' },
  { color: 'bg-acu-schedule-blue', label: 'Workshop (blue)' },
  { color: 'bg-acu-schedule-olive', label: 'Exams (olive)' },
  { color: 'bg-acu-schedule-green', label: 'Study session or conference (green)' },
  { color: 'bg-acu-purple-100', label: 'Social event or careers workshop (purple)' },
  { color: 'bg-acu-charcoal-100', label: 'Sport (charcoal)' },
];

const ColorKeyModal: React.FC<ColorKeyModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !contentRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="w-[498px] rounded-lg p-4 shadow-xl backdrop:backdrop-blur-sm"
      onClose={onClose}
    >
      <div ref={contentRef}>
        <h3 className="relative mb-4 pb-6 text-[2.025rem] font-bold text-acu-purple-100 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[0.5px] after:bg-acu-black-20 after:content-['']">
          Colour key
        </h3>
        <ul className="relative mb-4 space-y-2 pb-6 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[0.5px] after:bg-acu-black-20 after:content-['']">
          {colorKeys.map(({ color, label }) => (
            <li key={color} className="flex items-center">
              <span
                className={cn('mr-2 h-4 w-4 rounded-full', {
                  [color]: color,
                })}
              ></span>
              {label}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="float-end mt-4 border border-acu-purple-100 bg-white px-5 py-2 text-acu-purple-100 transition-colors hover:bg-acu-purple-100 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};

export default ColorKeyModal;
