import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/container';
import Prose from '@/components/prose';
import Time from '@/components/time';
import { getArticle } from '@/lib/shopify';
import Image from 'next/image';

export const runtime = 'edge';

export const revalidate = 60; // seconds

export async function generateMetadata({
  params,
}: {
  params: { article: string };
}): Promise<Metadata> {
  const article = await getArticle(params.article);

  if (!article) return notFound();

  return {
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    openGraph: {
      publishedTime: article.publishedAt,
      type: 'article',
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const article = await getArticle(params.article);

  if (!article) return notFound();

  return (
    <Container className="flex-col px-8 pb-12 pt-4 xl:pb-16">
      <Time datetime={article.publishedAt} className="mb-4 xl:text-lg" />
      <h1 className="mb-4 text-center font-body text-4xl font-medium xl:text-5xl">
        {article.title}
      </h1>
      <p className="mb-8 text-center text-xl xl:text-3xl">
        By: {article.authorV2.name} | {article.authorV2.bio}
      </p>
      <p></p>
      <div className="prose relative mb-8 aspect-[16/9] w-full">
        <Image
          src={article.image.url}
          alt={article.image.altText}
          fill
          className="rounded-[10px] object-cover"
          priority
        />
      </div>
      <Prose className="mb-8" html={article.contentHtml as string} />
    </Container>
  );
}
