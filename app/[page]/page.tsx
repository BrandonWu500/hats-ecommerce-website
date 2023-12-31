import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/container';
import Prose from '@/components/prose';
import { getPage } from '@/lib/shopify';

export const runtime = 'edge';

export const revalidate = 60; // seconds

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <Container className="flex-col px-8 pb-12 pt-4 xl:pb-16">
      <h1 className="mb-8 font-heading text-5xl font-semibold">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="font-body italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        ).format(new Date(page.updatedAt))}.`}
      </p>
    </Container>
  );
}
