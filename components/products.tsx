import ProductCard from '@/components/product/card';
import { Product } from '@/lib/shopify/types';

type Props = {
  products: Product[];
  title?: string;
};
const Products = ({ products, title }: Props) => {
  return (
    <div className="mb-16">
      {title && (
        <h2 className="mb-4 text-center font-heading text-[32px] font-semibold xl:mb-6 xl:text-left xl:text-5xl">
          {title}
        </h2>
      )}
      <ul className="grid grid-cols-1 gap-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-[48px]">
        {products?.map((product) => (
          <ProductCard
            key={product.handle}
            imgUrl={product.featuredImage.url}
            handle={product.handle}
            price={product.priceRange.maxVariantPrice.amount}
            title={product.title}
          />
        ))}
      </ul>
    </div>
  );
};
export default Products;
