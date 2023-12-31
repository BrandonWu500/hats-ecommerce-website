'use client';

import { Dialog, Transition } from '@headlessui/react';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';

import RemoveItemButton from '@/components/cart/remove-item-button';
import Price from '@/components/price';
import Quantity from '@/components/quantity';
import { useCartModal } from '@/hooks/use-cart-modal';
import { DEFAULT_OPTION } from '@/lib/constants';
import { Cart } from '@/lib/shopify/types';
import { createUrl } from '@/lib/utils';

type MerchandiseSearchParams = {
  [key: string]: string;
};

type Props = {
  cart: Cart | undefined;
};
const CartModal = ({ cart }: Props) => {
  const quantityRef = useRef(cart?.totalQuantity);
  const { isOpen, onClose: closeCart, onOpen: openCart } = useCartModal();

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        openCart();
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef, openCart]);

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
        <p className="font-body text-2xl font-medium">
          {cart?.totalQuantity || 0}
        </p>
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeCart} className="relative z-50">
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
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col gap-12 border-l border-slate-200 bg-slate-100 p-6 md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="font-heading text-[28px] font-medium">
                  Shopping Bag
                </p>

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
                <ul className="flex flex-col gap-6 overflow-y-auto xl:scrollbar-thin xl:scrollbar-track-orange-200 xl:scrollbar-thumb-slate-600">
                  {cart.lines.map((item) => {
                    const merchandiseSearchParams =
                      {} as MerchandiseSearchParams;

                    item.merchandise.selectedOptions.forEach(
                      ({ name, value }) => {
                        if (value !== DEFAULT_OPTION) {
                          merchandiseSearchParams[name.toLowerCase()] = value;
                        }
                      }
                    );

                    const merchandiseUrl = createUrl(
                      `/product/${item.merchandise.product.handle}`,
                      new URLSearchParams(merchandiseSearchParams)
                    );

                    return (
                      <li key={item.id} className="flex gap-4">
                        <Link href={merchandiseUrl} onClick={closeCart}>
                          <div className="relative h-[255px] w-[162px]">
                            <Image
                              className="rounded-[10px] object-cover"
                              fill
                              sizes="162px"
                              alt={
                                item.merchandise.product.featuredImage
                                  .altText || item.merchandise.product.title
                              }
                              src={item.merchandise.product.featuredImage.url}
                            />
                          </div>
                        </Link>
                        <div className="flex flex-col gap-8">
                          <div className="flex flex-col gap-2">
                            <Link href={merchandiseUrl} onClick={closeCart}>
                              <p className="font-heading text-2xl font-semibold">
                                {item.merchandise.product.title}
                              </p>
                            </Link>
                            {item.merchandise.quantityAvailable > 0 ? (
                              <Price
                                className="font-body text-xl"
                                amount={item.cost.totalAmount.amount}
                                currencyCode={
                                  item.cost.totalAmount.currencyCode
                                }
                              />
                            ) : (
                              <p className="-translate-x-1 rounded-full bg-orange-100 px-4 py-2 font-body text-lg font-medium">
                                Out of Stock
                              </p>
                            )}
                            {item.merchandise.title !== DEFAULT_OPTION
                              ? item.merchandise.selectedOptions.map(
                                  ({ name, value }) => (
                                    <p
                                      key={name}
                                      className="font-body text-lg text-slate-600"
                                    >
                                      <span>{name}: </span>
                                      <span className="font-medium">
                                        {value}
                                      </span>
                                    </p>
                                  )
                                )
                              : null}
                          </div>
                          <RemoveItemButton item={item} />
                          <div className="-translate-x-1">
                            <Quantity
                              item={item}
                              quantityAvailable={
                                item.merchandise.quantityAvailable
                              }
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              {cart && cart.totalQuantity > 0 && (
                <div className="flex flex-col gap-4">
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
                    <a href={cart.checkoutUrl}>
                      <button className="w-full rounded-full bg-orange-200 px-8 py-4 text-center font-heading text-2xl font-medium">
                        Proceed To Checkout
                      </button>
                    </a>
                    <button
                      onClick={closeCart}
                      className="rounded-full border-2 border-slate-700 bg-transparent px-8 py-4 text-center font-heading text-2xl font-medium"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
export default CartModal;
