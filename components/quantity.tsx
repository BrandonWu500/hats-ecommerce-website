'use client';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { QUANTITY_OPTIONS } from '@/constants';

type Props = {
  quantity: number;
};
const Quantity = ({ quantity }: Props) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative h-[59px] w-[128px] rounded-full bg-orange-100 font-body text-lg">
        <p className="absolute left-5 top-4 inline-flex gap-2">
          Qty: <span>{quantity}</span>
        </p>
        <ChevronDownIcon
          className="absolute right-4 top-5 h-5 w-5"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute right-2 mt-2 flex w-fit flex-col gap-2 rounded-[10px] bg-orange-100 p-2">
        {QUANTITY_OPTIONS.map((option) => (
          <Menu.Item key={option}>
            {({ active }) => (
              <span
                className={`w-full cursor-pointer rounded-[10px] px-4 py-1 text-center text-xl ${
                  active && 'bg-orange-200'
                }`}
              >
                {option}
              </span>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default Quantity;
