import { ImageResponse } from 'next/server';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-slate-600">
        <p tw="font-heading text-9xl font-bold text-orange-200">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
