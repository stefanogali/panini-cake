import Cart from 'components/cart';
import Providers from 'components/layout/context-providers';
import Footer from 'components/layout/footer';
import MobileMenu from 'components/layout/navbar/mobile-menu';
import { getMenu } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { revalidatePath } from 'next/cache';
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
  //revalidate fecthes the data from the server and updates the cache. It should be global since layout is used through all the app.
  revalidatePath('/', 'layout');

  // Get menu from shopify
  const menu = await getMenu('main-menu');
  return (
    <html lang="en" className={`${jost.className} ${gochiHand.variable}`}>
      <body className="leading-[2em] text-black dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Providers>
          <main>
            <div className="fixed right-2.5 top-16 z-50 lg:right-20 lg:top-20">
              <div className="hidden lg:block">
                <Cart />
              </div>
              <div className="block lg:hidden">
                <MobileMenu menu={menu} />
              </div>
            </div>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
