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
      <div className="w-full rounded-[10px] border-4 border-slate-600 bg-transparent py-6 sm:py-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="font-heading text-3xl font-semibold text-slate-700 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              Keep up with the latest fashion trends in the hat world.
            </p>
            <BlogSection articles={[article]} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
