import ProductCard from '@/components/product/card';
import { Product } from '@/lib/shopify/types';

type Props = {
  products: Product[];
  title: string;
};
const ProductSlider = ({ products, title }: Props) => {
  return (
    <>
      <h2 className="mb-8 mt-4 font-heading text-[32px] font-semibold">
        {title}
      </h2>
      <ul className="mx-auto mb-16 flex w-full max-w-[400px] gap-8 overflow-x-auto overflow-y-hidden">
        {products.map((product) => (
          <ProductCard
            key={product.handle}
            imgUrl={product.featuredImage.url}
            handle={product.handle}
            price={product.priceRange.maxVariantPrice.amount}
            title={product.title}
            imgClassName="h-[244px] w-[224px]"
            titleClassName="text-2xl"
          />
        ))}
      </ul>
    </>
  );
};
export default ProductSlider;
