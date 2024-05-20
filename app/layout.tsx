// import { GeistSans } from 'geist/font/sans';
import Footer from 'components/layout/footer';
import { ensureStartsWith } from 'lib/utils';
import { Gochi_Hand, Jost } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const jost = Jost({ subsets: ['latin'], variable: '--main-font' });
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gochi-hand'
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jost.className} ${gochiHand.variable}`}>
      <body className="leading-[2em] text-black dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        {/* <Navbar /> */}
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
