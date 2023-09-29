import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import Container from '@/components/container';
import ProductGallery from '@/components/product/gallery';
import ProductInfo from '@/components/product/info';
import ProductSlider from '@/components/product/slider';
import { getCart, getProduct, getProducts } from '@/lib/shopify';
import { Image } from '@/lib/shopify/types';

type Props = {
  params: { handle: string };
};
const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.handle);
  if (!product) return notFound();

  // TODO: Change this to products in same collection
  const products = await getProducts({});

  const cartId = cookies().get('cartId')?.value;
  let cart;
  let itemInCart = false;

  if (cartId) {
    cart = await getCart(cartId);

    if (
      cart &&
      cart.lines.some((item) => item.merchandise.id === product.variants[0].id)
    ) {
      itemInCart = true;
    }
  }

  return (
    <Container className="mb-16 flex-col gap-12 xl:mb-24">
      <div className="flex w-full flex-col gap-8 xl:flex-row">
        <ProductGallery
          images={product.images.map((image: Image) => ({
            src: image.url,
            altText: image.altText,
          }))}
        />
        <ProductInfo product={product} itemInCart={itemInCart} />
      </div>
      <ProductSlider products={products} title="Related Products" />
    </Container>
  );
};
export default ProductPage;
