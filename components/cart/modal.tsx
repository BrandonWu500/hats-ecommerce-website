'use client';

import { Cart } from '@/lib/shopify/types';
import { Dialog } from '@headlessui/react';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type Props = {
  cart: Cart | undefined;
};
const CartModal = ({ cart }: Props) => {
  console.log(cart);
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {/* CART BUTTON */}
      <button
        className="flex items-center justify-center gap-3 rounded-full bg-orange-200 px-4 py-2 text-slate-600 xl:gap-4"
        aria-label="Open cart"
        onClick={openCart}
      >
        <div className="relative h-6 w-6">
          <ShoppingBagIcon />
        </div>
        <p className="font-body text-2xl font-medium">0</p>
      </button>
      <Dialog open={isOpen} onClose={closeCart} className="relative z-50">
        <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-slate-200 bg-slate-100 p-6 md:w-[390px]">
          <div className="flex items-center justify-between">
            <p className="font-heading text-[28px] font-medium">Shopping Bag</p>

            <button aria-label="Close cart" onClick={closeCart}>
              <XMarkIcon className="h-9" />
            </button>
          </div>

          <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
            <ShoppingBagIcon className="h-16" />
            <p className="mt-6 text-center font-heading text-3xl font-semibold">
              Your bag is empty.
            </p>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
export default CartModal;
