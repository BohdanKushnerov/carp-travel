'use client';

import { createPortal } from 'react-dom';
import React, { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';
import { useCloseModal } from '@/hooks/useCloseModal';

interface IModal {
  handleToggleModal: () => void;
  children: ReactNode;
}

const Modal: FC<IModal> = ({ handleToggleModal, children }) => {
  const [mounted, setMounted] = useState(false);
  useCloseModal(handleToggleModal);

  useEffect(() => setMounted(true), []);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggleModal();
    }
  };

  return mounted
    ? createPortal(
        <div
          className="absolute left-0 top-0 z-20 flex h-screen w-screen flex-col gap-[110px] bg-mobileMenu px-[20px] py-[43px] backdrop-blur-[50px] md:hidden"
          onClick={handleBackdropClick}
        >
          <button
            onClick={handleToggleModal}
            className="ml-auto w-min text-right text-[14px] font-normal tracking-[0.1em]"
          >
            CLOSE
          </button>
          {children}
        </div>,
        document.getElementById('modal-root')!
      )
    : null;
};

export default Modal;
