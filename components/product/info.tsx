'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import AddToCart from '@/components/cart/add-to-cart';
import Price from '@/components/price';
import VariantSelector from '@/components/product/variant-selector';
import Prose from '@/components/prose';
import Quantity from '@/components/quantity';
import { Product, ProductVariant } from '@/lib/shopify/types';

type Props = {
  product: Product;
  itemInCart: boolean;
};
const ProductInfo = ({ product, itemInCart }: Props) => {
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { variants } = product;

  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;

  const variantIdx =
    variants.findIndex((variant) => variant.id === selectedVariantId) ?? 0;

  return (
    <div className="z-10 flex flex-col gap-6 xl:gap-5">
      <h1 className="text-center font-heading text-5xl font-semibold xl:text-start xl:text-[72px]">
        {product.title}
      </h1>
      {product.descriptionHtml ? (
        <Prose
          className="mx-auto max-w-[372px] xl:max-w-none"
          html={product.descriptionHtml}
        />
      ) : null}

      {/* ADD TO CART SECTION */}
      <div className="flex flex-col items-center gap-8 xl:items-start">
        <Price
          amount={
            product.variants[variantIdx]?.price.amount ||
            product.priceRange.minVariantPrice.amount
          }
          currencyCode={
            product.variants[variantIdx]?.price.currencyCode ||
            product.priceRange.minVariantPrice.currencyCode
          }
          className="text-center font-body text-[32px] font-medium"
        />

        <VariantSelector
          options={product.options}
          variants={product.variants}
        />

        <div className="flex flex-col items-center gap-8 xl:-translate-x-2 xl:flex-row xl:items-start">
          {!itemInCart && (
            <Quantity
              quantity={quantity}
              quantityAvailable={product.variants[0].quantityAvailable}
              setQuantity={setQuantity}
            />
          )}
          <AddToCart
            variants={product.variants}
            availableForSale={product.availableForSale}
            quantity={quantity}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
