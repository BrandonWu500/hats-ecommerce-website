'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';

import ProductGalleryTab from '@/components/product/gallery/tab';

type Props = {
  images: {
    src: string;
    altText: string;
  }[];
};
const ProductGallery = ({ images }: Props) => {
  return (
    <Tab.Group as="div" className="flex w-full flex-col gap-4">
      <Tab.Panels>
        {images.map((image) => (
          <Tab.Panel key={image.src}>
            <div className="relative mx-auto h-[291px] w-[338px] xl:m-0 xl:h-[605px] xl:w-[571px]">
              <Image
                src={image.src}
                alt={image.altText}
                fill
                className="rounded-[10px] object-cover"
                sizes="(min-width: 1280px) 571px, 338px"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
      {images.length > 1 && (
        <Tab.List className="mx-auto flex w-full max-w-[372px] gap-4 overflow-x-auto pb-4 xl:ml-0 xl:max-w-[571px] xl:scrollbar xl:scrollbar-track-orange-200 xl:scrollbar-thumb-slate-700">
          {images.map((image) => (
            <ProductGalleryTab key={image.src} image={image} />
          ))}
        </Tab.List>
      )}
    </Tab.Group>
  );
};
export default ProductGallery;
