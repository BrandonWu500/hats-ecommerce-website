'use client';

import { createUrl } from '@/lib/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-[550px] items-center justify-between rounded-full bg-orange-200 pr-6"
    >
      <input
        type="text"
        name="search"
        placeholder="What are you looking for today?"
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full grow rounded-full border-0 bg-orange-200 py-3 pl-6 pr-4 font-body text-slate-700 placeholder:text-slate-600 focus:outline-none focus:ring-0 xl:text-lg"
      />
      <button className="flex h-full items-center">
        <MagnifyingGlassIcon className="h-5 xl:h-6" />
      </button>
    </form>
  );
};
export default SearchBar;
