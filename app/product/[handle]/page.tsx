import { getProduct } from '@/lib/shopify';

type Props = {
  params: { handle: string };
};
const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.handle);
  return <div>{product?.title}</div>;
};
export default ProductPage;
