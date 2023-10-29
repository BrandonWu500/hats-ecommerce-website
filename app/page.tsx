import Billboard from '@/components/billboard';
import BlogSection from '@/components/blog-section';
import Container from '@/components/container';
import Products from '@/components/products';
import Testimonials from '@/components/testimonials';
import { getCollectionProducts, getLatestArticle } from '@/lib/shopify';

export const runtime = 'edge';

export const revalidate = 60;

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
  const article = await getLatestArticle();

  return (
    <Container className="flex-col gap-8 pb-8 xl:gap-12">
      <Billboard />
      <Products products={products} title="The Collection" />
      <Testimonials />
      <BlogSection articles={article} />
    </Container>
  );
};
export default HomePage;
