'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { addItem } from '@/components/cart/actions';
import { ProductVariant } from '@/lib/shopify/types';

type Props = {
  availableForSale: boolean;
  variants: ProductVariant[];
};
const AddToCart = ({ variants, availableForSale }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = defaultVariantId;
  const title = !availableForSale
    ? 'Out of stock'
    : !selectedVariantId
    ? 'Please select options'
    : undefined;

  return (
    <button
      aria-label="Add item to bag"
      disabled={isPending || !availableForSale || !selectedVariantId}
      title={title}
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale || !selectedVariantId) return;

        startTransition(async () => {
          const error = await addItem(selectedVariantId);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className="mt-2 flex items-center gap-4 rounded-full bg-orange-200 px-8 py-4 xl:mt-0 xl:h-[59px] xl:scale-[96%]"
    >
      <ShoppingBagIcon className="h-7 w-7 xl:h-6 xl:w-6" />
      <p className="font-heading text-2xl font-semibold xl:text-lg">
        {availableForSale ? 'Add To Bag' : 'Out Of Stock'}
      </p>
    </button>
  );
};
export default AddToCart;
