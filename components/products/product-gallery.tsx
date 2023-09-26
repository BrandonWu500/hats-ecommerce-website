'use client';

import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  images: {
    src: string;
    altText: string;
  }[];
};
const ProductGallery = ({ images }: Props) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex w-full flex-col gap-8 pb-8">
      <div className="relative mx-auto h-[291px] w-[338px]">
        <Image
          src={activeImage.src}
          alt={activeImage.altText}
          fill
          className="rounded-[10px] object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex w-full gap-8 overflow-x-auto sm:justify-center">
          {images.map((image) => (
            <div
              key={image.src}
              className={twMerge(
                'relative aspect-square w-[124px] flex-shrink-0 scale-95 cursor-pointer rounded-[10px] border-[5px] border-transparent hover:scale-100',
                activeImage.src === image.src && 'border-orange-200'
              )}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image.src}
                alt={image.altText}
                fill
                className="rounded-[5px] object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductGallery;
