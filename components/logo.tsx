import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.svg';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 py-4  xl:gap-4">
      <Image src={logo} alt="Logo" />
      <p className="font-heading text-3xl font-semibold text-orange-200">
        Hats
      </p>
    </Link>
  );
};
export default Logo;
