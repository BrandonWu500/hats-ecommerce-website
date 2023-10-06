import { Raleway, Roboto } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
};

const raleway = Raleway({ subsets: ['latin'], variable: '--heading-font' });
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--body-font',
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${roboto.variable} bg-slate-100 text-slate-700 xl:scrollbar xl:scrollbar-track-orange-200 xl:scrollbar-thumb-slate-700`}
      >
        <Header />
        <main className="min-h-[calc(100vh-297px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
