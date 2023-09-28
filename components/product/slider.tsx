import ProductCard from '@/components/product/card';
import { Product } from '@/lib/shopify/types';

type Props = {
  products: Product[];
  title: string;
};
const ProductSlider = ({ products, title }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-6 font-heading text-[32px] font-semibold xl:self-start xl:text-4xl">
        {title}
      </h2>
      <ul className="mx-auto flex w-full max-w-[400px] gap-8 overflow-x-auto xl:max-w-none">
        {products.map((product) => (
          <ProductCard
            key={product.handle}
            imgUrl={product.featuredImage.url}
            handle={product.handle}
            price={product.priceRange.maxVariantPrice.amount}
            title={product.title}
            imgClassName="h-[244px] w-[224px] xl:w-[313px] xl:h-[342px]"
            titleClassName="text-2xl xl:text-3xl"
          />
        ))}
      </ul>
    </div>
  );
};
export default ProductSlider;
