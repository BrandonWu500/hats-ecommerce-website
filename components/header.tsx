import Cart from '@/components/cart';
import Container from '@/components/container';
import Logo from '@/components/logo';
import Searchbar from '@/components/searchbar';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-8 flex h-[80px] justify-center bg-slate-600 xl:h-[100px] xl:pr-0">
      <Container>
        <Logo />
        <div className="hidden xl:flex xl:grow xl:justify-center">
          <Searchbar />
        </div>
        <Cart />
      </Container>
    </div>
  );
};
export default Header;
