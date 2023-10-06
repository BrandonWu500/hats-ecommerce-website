import Container from '@/components/container';
import Products from '@/components/products';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';

export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the shop.',
};

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};
const SearchPage = async ({ searchParams }: Props) => {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length === 1 ? 'hat' : 'hats';

  return (
    <Container className="flex-col pb-8">
      <div className="w-full rounded-[10px] bg-orange-200 p-8 xl:px-48 xl:py-8">
        <p className="flex flex-col text-center font-body text-[32px] text-slate-600 xl:text-[48px]">
          <span className="capitalize">
            Found {products.length} {resultsText} for
          </span>
          <span className="overflow-x-auto whitespace-nowrap pb-2 text-[36px] font-medium xl:text-[56px] xl:scrollbar xl:scrollbar-track-orange-100 xl:scrollbar-thumb-slate-600">
            {searchValue}
          </span>
        </p>
      </div>
      <Products products={products} />
    </Container>
  );
};
export default SearchPage;
