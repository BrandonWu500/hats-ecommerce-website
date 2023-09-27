import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const AddToCart = () => {
  return (
    <button className="mt-2 flex items-center gap-4 rounded-full bg-orange-200 px-8 py-4 xl:mt-0 xl:h-[59px] xl:scale-[96%]">
      <ShoppingBagIcon className="h-7 w-7 xl:h-6 xl:w-6" />
      <p className="font-heading text-2xl font-semibold xl:text-lg">
        Add To Bag
      </p>
    </button>
  );
};
export default AddToCart;
