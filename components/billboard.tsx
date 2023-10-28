import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Billboard = () => {
  return (
    <div className="billboard-gradient flex w-full flex-col gap-3 rounded-[10px] bg-orange-200 px-8 py-6 xl:px-24 xl:py-16">
      <h1 className="whitespace-nowrap text-center font-heading text-2xl font-semibold  leading-tight text-slate-600 xl:text-[72px]">
        Welcome To BW Hats!
      </h1>
      <p className="text-center font-heading text-lg leading-tight text-slate-600">
        Where Custom Designs Meet Handcrafted Perfection
      </p>
      <Link
        href="/our-story"
        className="mt-4 flex items-center justify-center gap-2 self-center rounded-full bg-slate-600 px-8 py-3"
      >
        <p className="font-heading text-lg font-semibold text-orange-200">
          Read Our Story
        </p>
        <ArrowRightCircleIcon className="h-6 text-orange-200" />
      </Link>
    </div>
  );
};
export default Billboard;
