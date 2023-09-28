import Cart from '@/components/cart';
import Container from '@/components/container';
import Logo from '@/components/logo';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 mb-8 flex h-[80px] justify-center bg-slate-600 xl:h-[100px] xl:pr-0">
      <Container>
        <Logo />
        <Cart />
      </Container>
    </div>
  );
};
export default Header;
