import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/container';
import ProductGallery from '@/components/product/gallery';
import ProductInfo from '@/components/product/info';
import ProductSlider from '@/components/product/slider';
import { HIDDEN_PRODUCT_TAG } from '@/lib/constants';
import { getProduct, getProductRecommendations } from '@/lib/shopify';
import { Image } from '@/lib/shopify/types';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

type Props = {
  params: { handle: string };
};
const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.handle);
  if (!product) return notFound();

  const relatedProducts = await getProductRecommendations(product.id);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <Container className="mb-16 flex-col gap-12 xl:mb-24">
        <div className="flex w-full flex-col gap-8 xl:flex-row">
          <ProductGallery
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText,
            }))}
          />
          <ProductInfo product={product} />
        </div>
        <ProductSlider products={relatedProducts} title="Related Products" />
      </Container>
    </>
  );
};
export default ProductPage;
