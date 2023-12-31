'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { ListItem, PathFilterItem, SortFilterItem } from '@/lib/constants';
import { createUrl } from '@/lib/utils';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;

  newParams.delete('q');

  return (
    <li className="hover:bg-orange-200">
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={`block truncate py-3 pl-4 pr-4 text-2xl ${
          active ? 'font-medium' : 'font-normal'
        }`}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="hover:bg-orange-200">
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={`block truncate py-3 pl-4 pr-4 text-2xl ${
          active ? 'font-medium' : 'font-normal'
        }`}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function SearchFilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
