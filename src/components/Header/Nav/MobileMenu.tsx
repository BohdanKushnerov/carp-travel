'use client';

import { useCallback, useState } from 'react';

import MainNav from './Nav';
import Modal from '../../common/Modal';

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
          <MainNav className="mx-auto w-min" />
        </Modal>
      )}
    </div>
  );
};

export default MobileMenu;

{
  /* <nav className="mx-auto w-min">
            <ul className="flex w-min flex-col gap-12">
              <li className="w-min">
                <a
                  className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px]"
                  href=""
                >
                  About
                </a>
              </li>
              <li className="w-min">
                <a
                  className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px]"
                  href=""
                >
                  Services
                </a>
              </li>
              <li className="w-min">
                <a className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px]">
                  Career
                </a>
              </li>
              <li className="w-min">
                <a
                  className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px]"
                  href=""
                >
                  Gallery
                </a>
              </li>
              <li className="w-min">
                <a
                  className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px]"
                  href=""
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav> */
}
