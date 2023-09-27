import ProductCard from '@/components/product/card';
import { getProducts } from '@/lib/shopify';

const Products = async () => {
  const products = await getProducts({});

  return (
    <div className="mb-16 xl:mt-8">
      <h2 className="mb-12 text-center font-heading text-[32px] font-semibold xl:mb-16 xl:text-left xl:text-5xl">
        Products
      </h2>
      <ul className="grid grid-cols-1 gap-16 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-[72px]">
        {products.map((product) => (
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
