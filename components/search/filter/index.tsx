'use client';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { SearchFilterItem } from '@/components/search/filter/item';
import { ListItem } from '@/lib/constants';

type Props = {
  list: ListItem[];
  title?: string;
};
const SearchFilter = ({ list, title }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(list[0]);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setSelected(listItem);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div className="mb-8 w-full font-body text-2xl">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label className="pl-1 text-xl text-slate-500">
          {title}
        </Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-orange-100 py-3 pl-4 pr-10 text-left text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-6 w-6 text-slate-600"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-orange-100 text-base shadow ring-1 ring-slate-700 ring-opacity-5 focus:outline-none">
              {list.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none bg-orange-100 py-3 pl-4 pr-4 ${
                      active && 'bg-orange-200'
                    }`
                  }
                  value={item}
                >
                  <SearchFilterItem item={item} />
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default SearchFilter;
