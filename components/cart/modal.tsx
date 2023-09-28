'use client';

import { Dialog } from '@headlessui/react';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

import RemoveItemButton from '@/components/cart/remove-item-button';
import Price from '@/components/price';
import Quantity from '@/components/quantity';
import { Cart } from '@/lib/shopify/types';

type Props = {
  cart: Cart | undefined;
};
const CartModal = ({ cart }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      <button
        className="flex items-center justify-center gap-3 rounded-full bg-orange-200 px-4 py-2 text-slate-600 xl:gap-4"
        aria-label="Open bag"
        onClick={openCart}
      >
        <div className="relative h-6 w-6">
          <ShoppingBagIcon />
        </div>
        <p className="font-body text-2xl font-medium">{cart?.totalQuantity}</p>
      </button>

      <Dialog open={isOpen} onClose={closeCart} className="relative z-50">
        <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col gap-12 border-l border-slate-200 bg-slate-100 p-6 md:w-[390px]">
          <div className="flex items-center justify-between">
            <p className="font-heading text-[28px] font-medium">Shopping Bag</p>

            <button aria-label="Close bag" onClick={closeCart}>
              <XMarkIcon className="h-9" />
            </button>
          </div>

          {!cart || cart.lines.length === 0 ? (
            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <ShoppingBagIcon className="h-16" />
              <p className="mt-6 text-center font-heading text-3xl font-semibold">
                Your bag is empty.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6 overflow-y-auto">
              {cart.lines.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative h-[255px] w-[162px]">
                    <Image
                      className="rounded-[10px] object-cover"
                      fill
                      sizes="162px"
                      alt={
                        item.merchandise.product.featuredImage.altText ||
                        item.merchandise.product.title
                      }
                      src={item.merchandise.product.featuredImage.url}
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="font-heading text-2xl font-semibold">
                        {item.merchandise.product.title}
                      </p>
                      <Price
                        className="font-body text-xl"
                        amount={item.cost.totalAmount.amount}
                        currencyCode={item.cost.totalAmount.currencyCode}
                      />
                    </div>
                    <div className="-translate-x-1">
                      <Quantity quantity={item.quantity} />
                    </div>
                    <RemoveItemButton item={item} />
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cart && (
            <>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-heading text-2xl font-semibold">
                    Subtotal
                  </p>
                  <span className="font-body text-lg">
                    {cart.totalQuantity === 1
                      ? `(${cart.totalQuantity} item)`
                      : `(${cart.totalQuantity} items)`}
                  </span>
                </div>
                <Price
                  className="text-right text-2xl font-bold"
                  amount={cart.cost.totalAmount.amount}
                  currencyCode={cart.cost.totalAmount.currencyCode}
                />
              </div>
              <div className="flex flex-col gap-8">
                <button className="rounded-full bg-orange-200 px-8 py-4 text-center font-heading text-2xl font-medium">
                  Proceed To Checkout
                </button>
                <button className="rounded-full border-2 border-slate-700 bg-transparent px-8 py-4 text-center font-heading text-2xl font-medium">
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
export default CartModal;
