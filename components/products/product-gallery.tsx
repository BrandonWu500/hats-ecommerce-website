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
    <div>
      <div className="relative h-[291px] w-[338px]">
        <Image
          src={images[0].src}
          alt={images[0].altText}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default ProductGallery;
