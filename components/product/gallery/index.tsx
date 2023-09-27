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
      <div className="relative mx-auto h-[291px] w-[338px] xl:m-0 xl:h-[605px] xl:w-[571px]">
        <Image
          src={activeImage.src}
          alt={activeImage.altText}
          fill
          className="rounded-[10px] object-cover"
          sizes="(min-width: 1280px) 571px, 338px"
        />
      </div>
      {images.length > 1 && (
        <div className="mx-auto flex w-full max-w-[372px] gap-8 overflow-x-auto xl:ml-0 xl:max-w-[571px]">
          {images.map((image) => (
            <div
              key={image.src}
              className={twMerge(
                'relative aspect-square w-[124px] flex-shrink-0 cursor-pointer rounded-[10px] border-[5px] border-transparent hover:opacity-90 xl:w-[160px]',
                activeImage.src === image.src && 'border-orange-200'
              )}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image.src}
                alt={image.altText}
                fill
                className="rounded-[5px] object-cover"
                sizes="(min-width: 1280px) 160px, 124px"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductGallery;
