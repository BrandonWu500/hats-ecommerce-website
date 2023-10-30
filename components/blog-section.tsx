import Image from 'next/image';
import Link from 'next/link';

import Time from '@/components/time';
import { Article } from '@/lib/shopify/types';

// const posts = [
//   {
//     id: 1,
//     title: 'Top 5 Hats for 2023',
//     href: '#',
//     description:
//       'With 2023 winding down, here is a look at some of the best hats from 2023...',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     date: 'Oct 28, 2023',
//     datetime: '2023-10-28',
//     category: { title: 'New', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Hat Connoisseur',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     id: 2,
//     title: 'New Winter Hats Are Coming!',
//     href: '#',
//     description:
//       'With winter approaching and temperatures starting to drop, we will be releasing...',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     date: 'Oct 14, 2023',
//     datetime: '2023-10-14',
//     category: { title: 'Annoucement', href: '#' },
//     author: {
//       name: 'Brandon Wu',
//       role: 'CEO of BW Hats',
//       href: '#',
//       imageUrl:
//         'https://res.cloudinary.com/dqrdsleqt/image/upload/v1698584937/my-portrait_rpggyl.jpg',
//     },
//   },
//   // More articles...
// ];

type Props = {
  articles: Article[];
};
export default function BlogSection({ articles }: Props) {
  return (
    <div className="mt-8 space-y-10 lg:mt-10 lg:space-y-10">
      {articles.map((article) => (
        <article
          key={article.id}
          className="relative isolate flex flex-col gap-8 lg:flex-row"
        >
          <Link href={`/blog/${article.handle}`} className="cursor-pointer">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={article.image.url}
                  alt=""
                  className="rounded-2xl bg-slate-50 object-cover"
                  fill
                />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-700/10" />
            </div>
          </Link>
          <div>
            <div className="flex items-center gap-x-4 text-xs">
              <Time datetime={article.publishedAt} className="text-slate-500" />
              <span className="relative z-10 cursor-default rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600">
                {article.tags[0]}
              </span>
            </div>
            <div className="group relative max-w-xl">
              <h3 className="mt-3 text-lg font-medium leading-6 text-slate-700 group-hover:text-slate-600">
                <Link href={`/blog/${article.handle}`}>
                  <span className="absolute inset-0" />
                  {article.title}
                </Link>
              </h3>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                {article.excerpt}
              </p>
            </div>
            <div className="mt-4 flex border-t border-slate-700/10 pt-4">
              <div className="relative flex items-center gap-x-4">
                {/* <div className="relative h-10 w-10">
                        <Image
                          src={article.author.imageUrl}
                          alt=""
                          className="rounded-full bg-slate-50 object-cover"
                          fill
                        />
                      </div> */}
                <div className="text-sm leading-6">
                  <p className="font-medium text-slate-700">
                    <span>
                      <span className="absolute inset-0" />
                      By: {article.authorV2.name}
                    </span>
                  </p>
                  <p className="text-slate-600">{article.authorV2.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
