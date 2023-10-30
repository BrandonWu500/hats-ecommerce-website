import Link from 'next/link';
import { SiFacebook, SiInstagram, SiTiktok, SiTwitter } from 'react-icons/si';

import Container from '@/components/container';
import Icon from '@/components/icon';
import { getMenu } from '@/lib/shopify';

const socialLinks = [
  {
    icon: SiFacebook,
    url: 'https://www.facebook.com/people/BW-Hats/61553078035122',
  },
  {
    icon: SiInstagram,
    url: 'https://www.instagram.com/bw.hats',
  },
  {
    icon: SiTiktok,
    url: 'https://www.tiktok.com/@bw.hats',
  },
  {
    icon: SiTwitter,
    url: 'https://twitter.com/BW_Hats',
  },
];

const Footer = async () => {
  const menu = await getMenu('footer');

  return (
    <div className="bg-slate-600 text-orange-200">
      <Container className="flex-col">
        <ul className="flex w-full flex-col items-center justify-between gap-6 py-6 font-body text-lg xl:flex-row xl:gap-8">
          {menu.map((item) => (
            <li key={item.title}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-col-reverse items-center gap-6 border-t border-orange-200 py-6 xl:flex-row">
          <p className="flex-1 text-center xl:text-left">{`© 2023 BW Hats Inc. All rights reserved.`}</p>
          <div className="flex w-full flex-1 items-center justify-center gap-14 px-8 xl:justify-end xl:gap-7 xl:p-0">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank">
                <Icon icon={link.icon} className="h-6 w-6 cursor-pointer" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
