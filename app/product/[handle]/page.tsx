import { notFound } from 'next/navigation';

import Container from '@/components/container';
import ProductGallery from '@/components/products/product-gallery';
import ProductInfo from '@/components/products/product-info';
import { getProduct } from '@/lib/shopify';
import { Image } from '@/lib/shopify/types';

type Props = {
  params: { handle: string };
};
const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <Container className="flex-col xl:flex-row xl:items-start xl:gap-8">
      <ProductGallery
        images={product.images.map((image: Image) => ({
          src: image.url,
          altText: image.altText,
        }))}
      />
      <ProductInfo product={product} />
    </Container>
  );
};
export default ProductPage;
