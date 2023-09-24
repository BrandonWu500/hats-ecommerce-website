import Image from 'next/image';

import Container from '@/components/container';
import Logo from '@/components/logo';

import shoppingBag from '/public/shopping-bag.svg';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-8 flex h-[80px] justify-center bg-slate-600 xl:h-[100px] xl:pr-0">
      <Container>
        <Logo />

        {/* CART BUTTON */}
        <button className="flex items-center justify-center gap-3 rounded-full bg-orange-200 px-4 py-2 xl:gap-4">
          <div className="relative h-6 w-6">
            <Image src={shoppingBag} alt="shopping bag" fill />
          </div>
          <p className="font-body text-2xl font-medium text-slate-600">0</p>
        </button>
      </Container>
    </div>
  );
};
export default Header;
