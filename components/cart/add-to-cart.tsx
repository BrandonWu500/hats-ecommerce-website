import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const AddToCart = () => {
  return (
    <button className="mt-4 flex items-center gap-4 self-center rounded-full bg-orange-200 px-8 py-4">
      <ShoppingBagIcon className="h-7 w-7" />
      <p className="font-heading text-2xl font-semibold">Add To Bag</p>
    </button>
  );
};
export default AddToCart;
