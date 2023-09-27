import Prose from '@/components/prose';
import { Product } from '@/lib/shopify/types';

type Props = {
  product: Product;
};
const ProductInfo = ({ product }: Props) => {
  return (
    <div className="my-4 flex flex-col gap-6 xl:mt-0">
      <h1 className="text-center font-heading text-5xl font-semibold xl:text-start xl:text-[72px]">
        {product.title}
      </h1>
      {product.descriptionHtml ? (
        <Prose
          className="mx-auto max-w-[372px] xl:max-w-none"
          html={product.descriptionHtml}
        />
      ) : null}
    </div>
  );
};
export default ProductInfo;
