import Billboard from '@/components/billboard';
import Container from '@/components/container';
import Products from '@/components/products';
import { getProducts } from '@/lib/shopify';

export const runtime = 'edge';

export const metadata = {
  description:
    "Looking for a new hat? Well, look no further! At BW Hats, we have some of the coolest hats on the market today with prices you won't find anywhere else!",
  openGraph: {
    type: 'website',
  },
};

const HomePage = async () => {
  const products = await getProducts({});

  return (
    <Container className="flex-col gap-8 pb-8">
      <Billboard />
      <Products products={products} title="Products" />
    </Container>
  );
};
export default HomePage;
