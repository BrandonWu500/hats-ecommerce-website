type Props = {
  images: {
    src: string;
    altText: string;
  }[];
};
const ProductGallery = ({ images }: Props) => {
  console.log(images);
  return <div>ProductGallery</div>;
};
export default ProductGallery;
