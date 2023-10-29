import Image from 'next/image';
import facebookIcon from '/public/facebook.svg';
import instagramIcon from '/public/instagram.svg';
import tiktokIcon from '/public/tiktok.svg';
import twitterIcon from '/public/twitter.svg';

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      logoUrl: twitterIcon,
    },
  },
  {
    body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
    author: {
      name: 'Lindsay Walton',
      handle: 'lindsaywalton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      logoUrl: facebookIcon,
    },
  },
  {
    body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
    author: {
      name: 'Tom Cook',
      handle: 'tomcook',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      logoUrl: instagramIcon,
    },
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Leonard Krasner',
      handle: 'leonardkrasner',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      logoUrl: tiktokIcon,
    },
  },
];

export default function Testimonials() {
  return (
    <div className="rounded-[10px] bg-orange-200/80 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="font-heading font-semibold uppercase leading-8 text-slate-600 xl:text-xl">
            Testimonials
          </h2>
          <p className="mt-2 text-center font-heading text-2xl font-semibold capitalize text-slate-700 xl:whitespace-nowrap xl:text-4xl">
            Here is what our customers are saying
          </p>
        </div>
        <div className="mx-auto mt-8 flow-root max-w-2xl sm:mt-12 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-slate-50 p-8 font-body text-sm leading-6">
                  <blockquote className="text-slate-700 xl:text-base">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-baseline justify-between">
                    <div className="flex items-center gap-x-4">
                      <div className="relative h-10 w-10">
                        <Image
                          className="rounded-full bg-slate-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          fill
                        />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-slate-700 xl:text-lg">
                          {testimonial.author.name}
                        </div>
                        <div className="text-slate-600 xl:text-base">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </div>
                    <Image src={testimonial.author.logoUrl} alt="" />
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
