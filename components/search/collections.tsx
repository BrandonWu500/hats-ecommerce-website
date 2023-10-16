import SearchFilter from '@/components/search/filter';
import { getCollections } from '@/lib/shopify';

const Collections = async () => {
  const collections = await getCollections();
  return <SearchFilter list={collections} title="Collections" />;
};
export default Collections;
