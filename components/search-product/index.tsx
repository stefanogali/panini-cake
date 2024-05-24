'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { createUrl } from 'lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement> | null, refFromInput: string = '') {
    e?.preventDefault();
    if (!e?.target && !refFromInput) {
      router.push('/products');
      return;
    }

    const val = e?.target as HTMLFormElement;
    const search = val?.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (refFromInput) {
      newParams.set('q', refFromInput);
    } else {
      if (search.value) {
        newParams.set('q', search.value);
      } else {
        newParams.delete('q');
      }
    }

    console.log('onsubmit and create url');
    router.push(createUrl('/products', newParams));
  }

  const handleClick = () => {
    onSubmit(null, inputRef.current?.value);
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-72">
      <input
        ref={inputRef}
        key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full rounded border border-black/30 bg-white px-4 py-1.5 text-sm leading-none text-black placeholder:text-neutral-500"
      />
      <div
        className="absolute right-0 top-0 flex h-full cursor-pointer items-center rounded-r bg-main-red-barn px-2"
        onClick={handleClick}
      >
        <MagnifyingGlassIcon className="h-4 stroke-white" />
      </div>
    </form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 stroke-white" />
      </div>
    </form>
  );
}
