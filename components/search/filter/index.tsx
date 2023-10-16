import { PathFilterItem, SortFilterItem } from '@/lib/constants';

export type ListItem = SortFilterItem | PathFilterItem;

type Props = {
  list: ListItem[];
  title?: string;
};
const SearchFilter = ({ list, title }: Props) => {
  console.log(list, title);
  return <div>SearchFilter</div>;
};
export default SearchFilter;
