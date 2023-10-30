import Link from 'next/link';

import Container from '@/components/container';
import Newsletter from '@/components/newsletter';
import { getMenu } from '@/lib/shopify';

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
        <Newsletter />
        <div className="w-full border-t border-orange-200">
          <p className="py-6 text-center font-body">{`© 2023 BW Hats Inc. All rights reserved.`}</p>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
