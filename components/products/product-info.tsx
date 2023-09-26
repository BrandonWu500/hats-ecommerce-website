import { Product } from '@/lib/shopify/types';

type Props = {
  product: Product;
};
const ProductInfo = ({ product }: Props) => {
  console.log(product);
  return <div>ProductInfo</div>;
};
export default ProductInfo;
