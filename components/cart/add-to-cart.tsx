'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { ClipLoader } from 'react-spinners';

import { addItem } from '@/components/cart/actions';
import { ProductVariant } from '@/lib/shopify/types';

type Props = {
  availableForSale: boolean;
  variants: ProductVariant[];
  quantity?: number;
};
const AddToCart = ({ variants, availableForSale, quantity = 1 }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
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
          const error = await addItem(selectedVariantId, quantity);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className="flex items-center gap-4 rounded-full bg-orange-200 px-8 py-4 disabled:cursor-not-allowed disabled:bg-orange-100 xl:h-[59px]"
    >
      {availableForSale ? (
        isPending ? (
          <ClipLoader color="#334155" />
        ) : (
          <ShoppingBagIcon className="h-7 w-7 xl:h-6 xl:w-6" />
        )
      ) : null}
      <p className="font-heading text-2xl font-semibold xl:text-lg">
        {availableForSale ? 'Add To Bag' : 'Out Of Stock'}
      </p>
    </button>
  );
};
export default AddToCart;
