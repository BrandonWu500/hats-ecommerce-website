'use client';

import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import SearchBar from '@/components/search/bar';

const SearchModal = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={onOpen}
        aria-label="Show search field"
        className="rounded-full bg-orange-200 p-3"
      >
        <MagnifyingGlassIcon className="h-6 text-slate-600" />
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
            {/* OVERLAY */}
            <div className="fixed inset-0 bg-slate-900/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col items-center gap-8 bg-slate-100 p-6 md:w-[390px]">
              <div className="flex w-full items-center justify-between">
                <p className="ml-1 font-heading text-[28px] font-medium">
                  Search Products
                </p>

                <button onClick={onClose} aria-label="Hide search field">
                  <XMarkIcon className="h-9" />
                </button>
              </div>

              <SearchBar />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
export default SearchModal;
