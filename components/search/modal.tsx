'use client';

import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';

import Searchbar from '@/components/search/bar';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={onOpen}
        aria-label="Show search field"
        className="rounded-full bg-orange-200 p-3"
      >
        <MagnifyingGlassIcon className="h-6 text-slate-600 xl:hidden" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={onClose} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
                  onClick={onClose}
                  aria-label="Hide search field"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Searchbar />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
export default SearchModal;
