import Prose from '@/components/prose';
import { Product } from '@/lib/shopify/types';

type Props = {
  product: Product;
};
const ProductInfo = ({ product }: Props) => {
  return (
    <div className="my-4 flex flex-col gap-6">
      <h1 className="text-center font-heading text-5xl font-semibold">
        {product.title}
      </h1>
      {product.descriptionHtml ? (
        <Prose
          className="mx-auto max-w-[372px]"
          html={product.descriptionHtml}
        />
      ) : null}
    </div>
  );
};
export default ProductInfo;
