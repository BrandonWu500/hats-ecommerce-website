'use client';

import Image from 'next/image';
import { useState } from 'react';

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
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex w-full gap-8 overflow-x-auto sm:justify-center">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative h-[119px] w-[124px] flex-shrink-0"
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image.src}
                alt={image.altText}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductGallery;
