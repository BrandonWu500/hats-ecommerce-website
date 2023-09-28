import { Cart } from '@/lib/shopify/types';

type Props = {
  cart: Cart | undefined;
};
const CartModal = ({ cart }: Props) => {
  console.log(cart);
  return <div>CartModal</div>;
};
export default CartModal;
