import Image from 'next/image';
import Link from 'next/link';

type Props = {
  imgUrl: string;
  title: string;
  price: string | number;
  handle: string;
};
const ProductCard = ({ imgUrl, title, price, handle }: Props) => {
  return (
    <li>
      <Link href={`/product/${handle}`} className="flex flex-col gap-4">
        <div className="relative h-[343px] w-[343px] rounded-[10px]">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="rounded-[10px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 text-center font-heading">
          <h3 className="text-[32px] font-semibold">{title}</h3>
          <p className="text-2xl font-medium">{price}</p>
        </div>
      </Link>
    </li>
  );
};
export default ProductCard;
