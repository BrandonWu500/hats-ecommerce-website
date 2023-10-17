import ProductCard from '@/components/product/card';
import { Product } from '@/lib/shopify/types';

type Props = {
  products: Product[];
};
const SearchProducts = ({ products }: Props) => {
  return (
    <div className="mb-16">
      <ul className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-[48px]">
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
export default SearchProducts;
