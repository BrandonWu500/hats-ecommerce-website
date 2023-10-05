export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the shop.',
};

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};
const SearchPage = async ({ searchParams }: Props) => {
  console.log(searchParams);
  return <div>SearchPage</div>;
};
export default SearchPage;
