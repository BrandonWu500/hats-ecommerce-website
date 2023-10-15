'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { ProductOption, ProductVariant } from '@/lib/shopify/types';
import { createUrl } from '@/lib/utils';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

type Props = {
  options: ProductOption[];
  variants: ProductVariant[];
};
const VariantSelector = ({ options, variants }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {}
    ),
  }));

  return options.map((option) => (
    <dl className="mb-8" key={option.id}>
      <dt className="mb-4 flex items-center justify-center gap-3 text-center font-body text-lg">
        {searchParams.get(option.name.toLowerCase()) && (
          <span>{option.name}:</span>
        )}
        <span className="font-medium">
          {searchParams.get(option.name.toLowerCase()) ?? 'Select Size'}
        </span>
      </dt>
      <dd className="flex flex-wrap gap-4">
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(
            searchParams.toString()
          );

          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(
            ([key, value]) =>
              options.find(
                (option) =>
                  option.name.toLowerCase() === key &&
                  option.values.includes(value)
              )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) =>
                combination[key] === value && combination.availableForSale
            )
          );

          // The option is active if it's in the url params.
          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <button
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                router.replace(optionUrl, { scroll: false });
              }}
              title={`${option.name} ${value}${
                !isAvailableForSale ? ' (Out of Stock)' : ''
              }`}
              className={twMerge(
                'flex min-w-[48px] items-center justify-center rounded-full bg-orange-200 px-6 py-2 font-body text-lg font-medium',
                isActive && 'cursor-default ring-4 ring-slate-600',
                !isActive &&
                  isAvailableForSale &&
                  'ring-2 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-slate-600',
                !isAvailableForSale &&
                  'relative z-10 cursor-not-allowed overflow-hidden bg-slate-100 text-slate-500 ring-2 ring-slate-300 before:absolute before:inset-x-0 before:-z-10 before:h-[2px] before:-rotate-45 before:bg-slate-300 before:transition-transform'
              )}
            >
              {value}
            </button>
          );
        })}
      </dd>
    </dl>
  ));
};
export default VariantSelector;
