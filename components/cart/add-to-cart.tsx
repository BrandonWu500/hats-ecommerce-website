'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { addItem } from '@/components/cart/actions';
import { ProductVariant } from '@/lib/shopify/types';

type Props = {
  quantityAvailable: number;
  variants: ProductVariant[];
  quantity: number;
  itemInCart: boolean;
};
const AddToCart = ({
  variants,
  quantityAvailable,
  quantity,
  itemInCart,
}: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = defaultVariantId;
  const title =
    quantityAvailable === 0
      ? 'Out of stock'
      : !selectedVariantId
      ? 'Please select options'
      : undefined;

  if (quantityAvailable === 0) {
    return (
      <div className="mt-2 flex cursor-not-allowed items-center gap-4 rounded-full bg-orange-100 px-8 py-4 font-heading text-2xl font-semibold xl:mt-0 xl:h-[59px] xl:scale-[96%] xl:text-lg">
        Out Of Stock
      </div>
    );
  }

  return (
    <button
      aria-label="Add item to bag"
      disabled={
        isPending || !quantityAvailable || !selectedVariantId || itemInCart
      }
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!quantityAvailable || !selectedVariantId || !quantity) return;

        startTransition(async () => {
          const error = await addItem(selectedVariantId, quantity);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className="mt-2 flex items-center gap-4 rounded-full bg-orange-200 px-8 py-4 disabled:cursor-not-allowed disabled:bg-orange-100 xl:mt-0 xl:h-[59px] xl:scale-[96%]"
    >
      {itemInCart ? (
        <p className="font-heading text-2xl font-semibold capitalize xl:text-lg">
          Item is in bag
        </p>
      ) : (
        <>
          {quantityAvailable ? (
            <ShoppingBagIcon className="h-7 w-7 xl:h-6 xl:w-6" />
          ) : null}
          <p className="font-heading text-2xl font-semibold xl:text-lg">
            {quantityAvailable ? 'Add To Bag' : 'Out Of Stock'}
          </p>
        </>
      )}
    </button>
  );
};
export default AddToCart;
