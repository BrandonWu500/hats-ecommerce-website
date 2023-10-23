import Image from 'next/image';
import Link from 'next/link';
import desktopLogo from '/public/desktop-logo.svg';
import mobileLogo from '/public/mobile-logo.svg';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 py-4  xl:gap-4">
      <div className="hidden lg:block">
        <Image src={desktopLogo} alt={`${process.env.SITE_NAME} logo`} />
      </div>
      <div className="block lg:hidden">
        <Image src={mobileLogo} alt={`${process.env.SITE_NAME} logo`} />
      </div>
    </Link>
  );
};
export default Logo;
