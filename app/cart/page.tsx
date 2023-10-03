'use client';

import { useEffect } from 'react';

import { useCartModal } from '@/hooks/use-cart-modal';

const CartPage = () => {
  const { onOpen: openCart } = useCartModal();

  useEffect(() => {
    openCart();
  }, [openCart]);

  return <div className="min-h-[60vh]"></div>;
};
export default CartPage;
