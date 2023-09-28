import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import Price from '@/components/price';

type Props = {
  imgUrl: string;
  title: string;
  price: string | number;
  handle: string;
  imgClassName?: string;
  titleClassName?: string;
};
const ProductCard = ({
  imgUrl,
  title,
  price,
  handle,
  imgClassName,
  titleClassName,
}: Props) => {
  return (
    <li>
      <Link href={`/product/${handle}`} className="flex flex-col gap-4">
        <div
          className={twMerge(
            'relative h-[343px] w-[343px] rounded-[10px] xl:w-[313px]',
            imgClassName
          )}
        >
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="rounded-[10px] object-cover"
            sizes="(min-width: 1280px) 313px, 343px"
          />
        </div>
        <div className="flex flex-col gap-2 text-center font-heading xl:text-left">
          <h3 className={twMerge('text-[32px] font-semibold', titleClassName)}>
            {title}
          </h3>
          <Price amount={price} className="text-2xl font-medium" />
        </div>
      </Link>
    </li>
  );
};
export default ProductCard;
