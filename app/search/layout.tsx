import Container from '@/components/container';
import Collections from '@/components/search/collections';
import SearchFilter from '@/components/search/filter';
import { sorting } from '@/lib/constants';

type Props = {
  children: React.ReactNode;
};
const SearchLayout = ({ children }: Props) => {
  return (
    <Container className="flex-col pb-8">
      <Collections />
      <SearchFilter list={sorting} title="Sort By" />
      {children}
    </Container>
  );
};
export default SearchLayout;
