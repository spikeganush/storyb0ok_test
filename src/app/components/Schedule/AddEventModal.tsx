import React, { useEffect, useRef } from 'react';

type AddEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose }) => {
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
      </div>
    </dialog>
  );
};

export default AddEventModal;
