import Billboard from '@/components/billboard';
import Container from '@/components/container';
import Products from '@/components/products';

const HomePage = () => {
  return (
    <Container className="flex-col gap-20">
      <Billboard />
      <Products />
    </Container>
  );
};
export default HomePage;
