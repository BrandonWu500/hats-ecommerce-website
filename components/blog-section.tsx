import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Top 5 Hats for 2023',
    href: '#',
    description:
      'With 2023 winding down, here is a look at some of the best hats from 2023...',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Oct 28, 2023',
    datetime: '2023-10-28',
    category: { title: 'New', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Hat Connoisseur',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'New Winter Hats Are Coming!',
    href: '#',
    description:
      'With winter approaching and temperatures starting to drop, we will be releasing...',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Oct 14, 2023',
    datetime: '2023-10-14',
    category: { title: 'Annoucement', href: '#' },
    author: {
      name: 'Brandon Wu',
      role: 'CEO of BW Hats',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dqrdsleqt/image/upload/v1698584937/my-portrait_rpggyl.jpg',
    },
  },
  // More posts...
];

export default function BlogSection() {
  return (
    <div className="w-full rounded-[10px] border-4 border-slate-600 bg-transparent py-6 sm:py-8">
      <div className="px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-slate-700 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Keep up with the latest fashion trends in the hat world.
          </p>
          <div className="mt-8 space-y-10 lg:mt-10 lg:space-y-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 h-full w-full">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      className="rounded-2xl bg-slate-50 object-cover"
                      fill
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-700/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-slate-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-700 group-hover:text-slate-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-slate-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-slate-700/10 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <div className="relative h-10 w-10">
                        <Image
                          src={post.author.imageUrl}
                          alt=""
                          className="rounded-full bg-slate-50 object-cover"
                          fill
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-slate-700">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-slate-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
