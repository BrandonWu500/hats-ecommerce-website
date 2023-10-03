import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { ClipLoader } from 'react-spinners';

import { removeItem } from '@/components/cart/actions';
import { CartItem } from '@/lib/shopify/types';

type Props = {
  item: CartItem;
};
const RemoveItemButton = ({ item }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove item from bag"
      onClick={() => {
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className="self-start"
    >
      {isPending ? (
        <div className="ml-4">
          <ClipLoader color="#334155" />
        </div>
      ) : (
        <p className="font-heading text-xl underline">Remove</p>
      )}
    </button>
  );
};
export default RemoveItemButton;
