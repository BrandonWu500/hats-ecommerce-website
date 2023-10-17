'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { SearchFilterItem } from '@/components/search/filter/item';
import { ListItem } from '@/lib/constants';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

type Props = {
  list: ListItem[];
  title?: string;
};
const SearchFilter = ({ list, title }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div className="relative mb-5" ref={ref}>
      <p className="pl-1 text-xl text-slate-500">{title}</p>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="relative mt-1 flex w-full cursor-pointer items-center justify-between rounded-[10px] bg-orange-100 py-3 pl-4 pr-10 text-left text-2xl text-slate-600"
      >
        <div className="block truncate">{active}</div>
        <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-2">
          <ChevronDownIcon
            className="h-6 w-6 text-slate-600"
            aria-hidden="true"
          />
        </span>
      </div>
      {openSelect && (
        <ul
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-orange-100 text-base shadow ring-1 ring-slate-700 ring-opacity-5 focus:outline-none"
        >
          {list.map((item: ListItem, i) => (
            <SearchFilterItem key={i} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchFilter;
