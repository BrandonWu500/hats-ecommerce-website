import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 py-4  xl:gap-4">
      <p className="font-heading text-3xl font-semibold text-orange-200">
        BW Hats
      </p>
    </Link>
  );
};
export default Logo;
