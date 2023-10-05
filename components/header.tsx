import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import Cart from '@/components/cart';
import Container from '@/components/container';
import Logo from '@/components/logo';
import Searchbar from '@/components/search/bar';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-8 flex h-[80px] justify-center bg-slate-600 xl:h-[100px] xl:pr-0">
      <Container>
        <Logo />
        <div className="hidden xl:flex xl:grow xl:justify-center">
          <Searchbar />
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-orange-200 p-3">
            <MagnifyingGlassIcon className="h-6 text-slate-600 xl:hidden" />
          </button>
          <Cart />
        </div>
      </Container>
    </div>
  );
};
export default Header;
