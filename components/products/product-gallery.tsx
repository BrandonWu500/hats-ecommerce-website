import Image from 'next/image';

type Props = {
  images: {
    src: string;
    altText: string;
  }[];
};
const ProductGallery = ({ images }: Props) => {
  console.log(images);
  return (
    <div className="flex w-full flex-col gap-8 pb-8">
      <div className="relative mx-auto h-[291px] w-[338px]">
        <Image
          src={images[0].src}
          alt={images[0].altText}
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
