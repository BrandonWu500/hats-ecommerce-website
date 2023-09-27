'use client';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Props = {
  quantity: number;
};
const Quantity = ({ quantity }: Props) => {
  return (
    <Menu>
      <Menu.Button className="relative h-[59px] w-[128px] self-center rounded-full bg-orange-100 font-body text-lg font-medium">
        <p className="absolute left-5 top-4 inline-flex gap-2">
          Qty: <span>{quantity}</span>
        </p>
        <ChevronDownIcon
          className="absolute right-4 top-5 h-5 w-5"
          aria-hidden="true"
        />
      </Menu.Button>
    </Menu>
  );
};
export default Quantity;
