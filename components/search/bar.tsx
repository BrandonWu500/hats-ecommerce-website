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
    <form onSubmit={onSubmit} className="relative w-full max-w-[550px]">
      <input
        type="text"
        name="search"
        placeholder="What are you looking for today?"
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full rounded-full bg-orange-200 px-6 py-3 font-body text-lg text-slate-700 placeholder:text-slate-600 focus:outline-none"
      />
      <button className="absolute right-3 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-6" />
      </button>
    </form>
  );
};
export default SearchBar;
