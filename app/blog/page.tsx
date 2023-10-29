import BlogSection from '@/components/blog-section';
import Container from '@/components/container';
import { getArticles } from '@/lib/shopify';

export const runtime = 'edge';

export const revalidate = 60;

export const metadata = {
  title: 'Blog',
  description: 'View the latest articles from the BW Hats Blog.',
};

const BlogPage = async () => {
  const articles = await getArticles();

  return (
    <Container className="flex-col px-8 pb-12 pt-4 xl:pb-16">
      <h1 className="mb-4 font-heading text-5xl font-semibold xl:mb-0">
        The Blog
      </h1>
      <BlogSection articles={articles} />
    </Container>
  );
};
export default BlogPage;
