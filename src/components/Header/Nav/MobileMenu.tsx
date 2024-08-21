'use client';

import { useCallback, useState } from 'react';

import Nav from './Nav';
import Modal from '@/components/common/Modal';

const MobileMenu = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsShowModal(prev => !prev);
  }, []);

  return (
    <div className="block md:hidden">
      <button
        onClick={handleToggleModal}
        className="text-sm font-normal tracking-wide md:hidden"
      >
        MENU
      </button>

      {isShowModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <Nav className="mx-auto w-min" />
        </Modal>
      )}
    </div>
  );
};

export default MobileMenu;
