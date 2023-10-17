import Cart from '@/components/cart';
import Container from '@/components/container';
import Logo from '@/components/logo';
import SearchBar from '@/components/search/bar';
import SearchModal from '@/components/search/modal';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-4 flex h-[80px] justify-center bg-slate-600 xl:mb-6 xl:h-[100px] xl:pr-0">
      <Container>
        <Logo />
        <div className="hidden xl:flex xl:grow xl:justify-center">
          {/* DESKTOP SEARCH */}
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          {/* MOBILE SEARCH */}
          <div className="xl:hidden">
            <SearchModal />
          </div>

          <Cart />
        </div>
      </Container>
    </div>
  );
};
export default Header;
