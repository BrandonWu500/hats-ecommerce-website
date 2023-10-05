import Billboard from '@/components/billboard';
import Container from '@/components/container';
import Products from '@/components/products';
import { getProducts } from '@/lib/shopify';

const HomePage = async () => {
  const products = await getProducts({});

  return (
    <Container className="flex-col gap-20 pb-8">
      <Billboard />
      <Products products={products} title="Products" />
    </Container>
  );
};
export default HomePage;
