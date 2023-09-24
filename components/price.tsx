'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  amount: string | number;
  className?: string;
  currencyCode?: string;
  currencyCodeClassName?: string;
  showCurrencyCode?: boolean;
};
const Price = ({
  amount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName,
  showCurrencyCode = false,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <p className={className}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol',
      }).format(Number(amount))}`}
      {showCurrencyCode && (
        <span
          className={twMerge('ml-1 inline', currencyCodeClassName)}
        >{`${currencyCode}`}</span>
      )}
    </p>
  );
};
export default Price;
