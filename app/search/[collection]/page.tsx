import Products from '@/components/products';
import { defaultSort, sorting } from '@/lib/constants';
import { getCollection, getCollectionProducts } from '@/lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

type Props = {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
const CollectionPage = async ({ params, searchParams }: Props) => {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  return (
    <>
      <Products products={products} />
    </>
  );
};
export default CollectionPage;
