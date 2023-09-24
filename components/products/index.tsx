import ProductCard from '@/components/products/product-card';

const Products = () => {
  return (
    <div>
      <h2 className="mb-12 text-center font-heading text-[32px] font-semibold">
        Products
      </h2>
      <ul className="flex flex-col gap-16">
        <ProductCard
          imgUrl={'/hat-1.jpeg'}
          handle="test"
          price={49}
          title="Palm Tree"
        />
        <ProductCard
          imgUrl={'/hat-1.jpeg'}
          handle="test"
          price={49}
          title="Palm Tree"
        />
        <ProductCard
          imgUrl={'/hat-1.jpeg'}
          handle="test"
          price={49}
          title="Palm Tree"
        />
      </ul>
    </div>
  );
};
export default Products;
