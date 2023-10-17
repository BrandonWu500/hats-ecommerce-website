import Container from '@/components/container';
import Collections from '@/components/search/collections';
import SearchFilter from '@/components/search/filter';
import { sorting } from '@/lib/constants';

type Props = {
  children: React.ReactNode;
};
const SearchLayout = ({ children }: Props) => {
  return (
    <Container className="flex-col gap-4 pb-8 xl:grid xl:grid-cols-3 xl:items-start xl:gap-8">
      <div className="w-full">
        <Collections />
        <SearchFilter list={sorting} title="Sort By" />
      </div>
      <div className="xl:col-span-2 xl:mt-2">{children}</div>
    </Container>
  );
};
export default SearchLayout;
