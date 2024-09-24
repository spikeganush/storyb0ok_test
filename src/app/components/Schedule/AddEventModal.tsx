import { colorKeys } from '@/app/utils/constants';
import React, { useEffect, useRef, useState } from 'react';
import CustomSelect from '../Generic/CustomSelect';
import CustomInput from '../Generic/CustomInput';
import { cn } from '@/app/utils/helper';
import Switch from './Switch';

type AddEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const [scrollThumbHeight, setScrollThumbHeight] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      updateScrollThumbHeight();
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
      window.addEventListener('resize', updateScrollThumbHeight);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updateScrollThumbHeight);
    };
  }, [isOpen, onClose]);

  const updateScrollThumbHeight = () => {
    if (contentRef.current && scrollTrackRef.current) {
      const { clientHeight, scrollHeight } = contentRef.current;
      const isContentScrollable = scrollHeight > clientHeight;
      setIsScrollable(isContentScrollable);
      if (isContentScrollable) {
        const scrollRatio = contentRef.current.clientHeight / contentRef.current.scrollHeight;
        const thumbHeight = Math.max(scrollRatio * scrollTrackRef.current.clientHeight, 20);
        setScrollThumbHeight(thumbHeight);
      }
    }
  };

  const handleScroll = () => {
    if (contentRef.current && scrollThumbRef.current && scrollTrackRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const thumbPosition =
        scrollPercentage * (scrollTrackRef.current.clientHeight - scrollThumbHeight);
      scrollThumbRef.current.style.transform = `translateY(${thumbPosition}px)`;
    }
  };

  const handleThumbMousedown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleThumbMouseup = () => {
    setIsDragging(false);
  };

  const handleThumbMousemove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    setStartY(e.clientY);

    if (contentRef.current && scrollTrackRef.current && scrollThumbRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current;
      const trackHeight = scrollTrackRef.current.clientHeight;

      const scrollableHeight = scrollHeight - clientHeight;
      const thumbMovableRange = trackHeight - scrollThumbHeight;

      const scrollIncrement = (deltaY / thumbMovableRange) * scrollableHeight;
      contentRef.current.scrollTop += scrollIncrement;
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleThumbMousemove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleThumbMousemove);
    };
  }, [isDragging]);

  return (
    <dialog
      ref={dialogRef}
      className="hide-scrollbar w-[498px] rounded-lg p-4 shadow-xl backdrop:backdrop-blur-sm"
      onClose={onClose}
    >
      <div className="hide-scrollbar relative h-[80vh]">
        <div
          ref={contentRef}
          className="hide-scrollbar h-full overflow-y-scroll"
          onScroll={handleScroll}
        >
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
              options={colorKeys.map((color) => ({
                label: color.label.replace(/\s*\([^)]*\)/, '').trim(),
                value: color.label.replace(/\s*\([^)]*\)/, '').trim(),
                color: color.color,
              }))}
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
            <div className="flex items-center justify-between font-semibold">
              <h2>Is this a recurring event?</h2>
              <Switch checked={isRecurring} onChange={() => setIsRecurring(!isRecurring)} />
            </div>
          </div>
          <div className="relative mb-8 pb-8 after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[1px] after:bg-acu-black-20 after:content-['']">
            <CustomInput name="room" placeholder="Room" label="Room" />
            <CustomInput name="location" placeholder="Location" label="Location" style="mb-0" />
          </div>
          <button className="w-full bg-acu-red-100 py-5 text-lg font-semibold text-white">
            Save Event
          </button>
        </div>
        <div
          ref={scrollTrackRef}
          className={cn(
            '-top-3npm run sto absolute -bottom-3 -right-4 w-2 rounded-full bg-acu-black-20',
            {
              'opacity-0': !isScrollable,
            },
          )}
        >
          <div
            ref={scrollThumbRef}
            className="absolute right-0 w-2 cursor-pointer rounded-full bg-acu-black-80"
            style={{ height: `${scrollThumbHeight}px` }}
            onMouseDown={handleThumbMousedown}
          ></div>
        </div>
      </div>
    </dialog>
  );
};

export default AddEventModal;
