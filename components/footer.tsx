import Link from 'next/link';

import Container from '@/components/container';
import { getMenu } from '@/lib/shopify';

const Footer = async () => {
  const menu = await getMenu('footer');

  return (
    <div className="bg-slate-600 text-orange-200">
      <Container className="flex-col">
        <ul className="flex flex-col items-center justify-center gap-6 py-6 pb-10 font-body text-lg xl:flex-row xl:gap-8">
          {menu.map((item) => (
            <li key={item.title}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="w-full border-t border-orange-200">
          <p className="pb-8 pt-4 text-center font-body">{`© 2023 BW Hats Inc. All rights reserved.`}</p>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
