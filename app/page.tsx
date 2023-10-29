import Billboard from '@/components/billboard';
import Container from '@/components/container';
import Products from '@/components/products';
import Testimonials from '@/components/testimonials';
import { getCollectionProducts } from '@/lib/shopify';

export const runtime = 'edge';

export const metadata = {
  description:
    "Looking for a new hat? Well, look no further! At BW Hats, we have some of the coolest hats on the market today with prices you won't find anywhere else!",
  openGraph: {
    type: 'website',
  },
};

const HomePage = async () => {
  const products = await getCollectionProducts({
    collection: 'the-collection',
  });

  return (
    <Container className="flex-col gap-8 pb-8 xl:gap-12">
      <Billboard />
      <Products products={products} title="The Collection" />
      <Testimonials />
    </Container>
  );
};
export default HomePage;
