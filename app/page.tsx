import Featuredproducts from 'components/layout/featured-products';
import Hero from 'components/layout/hero';
import Promo from 'components/layout/promo';
import { getCollectionProducts } from 'lib/shopify';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const featuredProductsHome = await getCollectionProducts({
    collection: 'special-cakes',
    reverse: true
  });
  return (
    <>
      <Hero />
      <Featuredproducts products={featuredProductsHome} />
      <Promo />
      {/* <ThreeItemGrid /> */}
      {/* <Carousel /> */}
      {/* <Footer /> */}
    </>
  );
}
