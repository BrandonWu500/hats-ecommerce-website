import AddToCart from '@/components/cart/add-to-cart';
import Price from '@/components/price';
import Prose from '@/components/prose';
import Quantity from '@/components/quantity';
import { Product } from '@/lib/shopify/types';

type Props = {
  product: Product;
};
const ProductInfo = ({ product }: Props) => {
  return (
    <div className="my-4 mb-16 flex flex-col gap-6 xl:mt-0">
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
      <Price
        amount={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        className="text-center font-body text-[32px] font-medium"
      />
      <Quantity quantity={1} />
      <AddToCart />
    </div>
  );
};
export default ProductInfo;
