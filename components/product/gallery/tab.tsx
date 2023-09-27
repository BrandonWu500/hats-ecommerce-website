import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  image: {
    src: string;
    altText: string;
  };
};
const ProductGalleryTab = ({ image }: Props) => {
  return (
    <Tab
      className={({ selected }) => twMerge(selected && 'outline-none ring-0')}
    >
      {({ selected }) => (
        <div
          className={twMerge(
            'relative aspect-square w-[124px] flex-shrink-0 cursor-pointer rounded-[10px] border-[5px] hover:opacity-90 xl:w-[160px]',
            selected ? 'border-orange-200' : 'border-transparent'
          )}
        >
          <Image
            src={image.src}
            alt={image.altText}
            fill
            className="rounded-[5px] object-cover"
            sizes="(min-width: 1280px) 160px, 124px"
          />
        </div>
      )}
    </Tab>
  );
};
export default ProductGalleryTab;
