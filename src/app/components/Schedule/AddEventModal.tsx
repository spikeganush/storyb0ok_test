import { colorKeys } from '@/app/utils/constants';
import React, { useEffect, useRef, useState } from 'react';
import CustomSelect from '../Generic/CustomSelect';
import CustomInput from '../Generic/CustomInput';

type AddEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollBarHeight, setScrollBarHeight] = useState(0);

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

  useEffect(() => {
    const updateScrollIndicator = () => {
      if (contentRef.current && scrollIndicatorRef.current && dialogRef.current) {
        const { clientHeight } = dialogRef.current;
        const { scrollHeight } = contentRef.current;
        const newScrollBarHeight = (clientHeight / scrollHeight) * 100;
        setScrollBarHeight(newScrollBarHeight);
        scrollIndicatorRef.current.style.height = `${newScrollBarHeight}%`;
      }
    };

    updateScrollIndicator();
    window.addEventListener('resize', updateScrollIndicator);

    return () => {
      window.removeEventListener('resize', updateScrollIndicator);
    };
  }, [isOpen]);

  const handleScroll = () => {
    if (dialogRef.current && scrollIndicatorRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = dialogRef.current;
      const newScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
      scrollIndicatorRef.current.style.top = `${newScrollPercentage}%`;
      console.log({ scrollTop, scrollHeight, clientHeight, newScrollPercentage });
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="hide-scrollbar w-[498px] rounded-lg p-4 shadow-xl backdrop:backdrop-blur-sm"
      onClose={onClose}
      onScroll={handleScroll}
    >
      <div className="" ref={contentRef}>
        <div className="relative mb-8 flex items-center justify-between pb-8 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[1px] after:bg-acu-black-20 after:content-['']">
          <h3 className="text-2xl font-bold text-acu-purple-100">NEW EVENT</h3>
          <button
            onClick={onClose}
            className="flex items-center font-semibold icon-after-close after:ml-1 after:text-acu-red-100"
          >
            Close
          </button>
        </div>
        <div className="relative mb-8 pb-8 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[1px] after:bg-acu-black-20 after:content-['']">
          <CustomSelect
            name="type"
            id="type"
            options={colorKeys.map((color) => {
              return {
                label: color.label.replace(/\s*\([^)]*\)/, '').trim(),
                value: color.label.replace(/\s*\([^)]*\)/, '').trim(),
                color: color.color,
              };
            })}
          />
        </div>
        <div className="relative mb-8 pb-8 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[1px] after:bg-acu-black-20 after:content-['']">
          <CustomInput name="title" placeholder="Title" required={true} />
          <CustomInput name="teacher" placeholder="Teacher" required={true} />
          <CustomInput name="date" placeholder="Date" type="date" required={true} />
          <div className="flex justify-between gap-x-8">
            <div className="flex-1">
              <CustomInput label="Start" name="start" placeholder="Start" type="time" />
            </div>
            <div className="flex-1">
              <CustomInput label="End" name="end" placeholder="End" type="time" />
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 w-1 rounded-lg bg-acu-black-80"
          ref={scrollIndicatorRef}
          style={{ height: `${scrollBarHeight}%`, top: `${scrollPercentage}%` }}
        ></div>
      </div>
    </dialog>
  );
};

export default AddEventModal;
