import ProductCard from '@/components/products/product-card';
import { getProducts } from '@/lib/shopify';

const Products = async () => {
  const products = await getProducts({});

  return (
    <div>
      <h2 className="mb-12 text-center font-heading text-[32px] font-semibold">
        Products
      </h2>
      <ul className="flex flex-col gap-16">
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
