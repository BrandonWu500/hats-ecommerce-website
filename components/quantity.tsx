'use client';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { updateItemQuantity } from '@/components/cart/actions';
import { CartItem } from '@/lib/shopify/types';
import { range } from '@/lib/utils';

type Props = {
  quantityAvailable: number;
  item?: CartItem;
  quantity?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
};
const Quantity = ({
  quantityAvailable,
  item,
  quantity = 1,
  setQuantity,
}: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity && setQuantity(newQuantity);

    startTransition(async () => {
      if (!item) return;

      const error = await updateItemQuantity({
        lineId: item.id,
        variantId: item.merchandise.id,
        quantity: newQuantity,
      });

      if (error) {
        // Trigger the error boundary in the root error.js
        throw new Error(error.toString());
      }

      router.refresh();
    });
  };

  return (
    <Menu as="div" className="relative ">
      <Menu.Button
        disabled={isPending}
        className="relative  h-[59px] w-[128px] rounded-full bg-orange-100 font-body text-lg"
      >
        <p className="absolute left-5 top-4 inline-flex gap-2">
          Qty: <span>{item?.quantity || quantity}</span>
        </p>
        <ChevronDownIcon
          className="absolute right-4 top-5 h-5 w-5"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute right-2  mt-2 flex w-fit flex-col gap-2 rounded-[10px] bg-orange-100 p-2">
        {range(quantityAvailable, 1).map((option) => (
          <Menu.Item key={option}>
            {({ active }) => (
              <span
                className={`w-full cursor-pointer rounded-[10px] px-4 py-1 text-center text-xl ${
                  active && 'bg-orange-200'
                }`}
                onClick={() => handleQuantityChange(option)}
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
