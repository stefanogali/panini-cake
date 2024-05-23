import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Footer from 'components/layout/footer';
import { ensureStartsWith } from 'lib/utils';
import { revalidatePath } from 'next/cache';
import { Gochi_Hand, Jost } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
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
  return (
    <html lang="en" className={`${jost.className} ${gochiHand.variable}`}>
      <body className="leading-[2em] text-black dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <main>
          <div className="fixed right-20 top-20 z-50">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
