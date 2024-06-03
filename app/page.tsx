import Featuredproducts from 'components/layout/featured-products';
import Hero from 'components/layout/hero';
import Promo from 'components/layout/promo';
import { getCollectionProducts } from 'lib/shopify';

export const metadata = {
  title: 'Free Next.js Ecommerce template using Shopify headless integration',
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify. Clone or fork this template to build your own ecommerce store.',
  openGraph: {
    type: 'website'
  },
  verification: {
    google: 'ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY'
  }
};

const { FEATURED_PRODUCT_SLUG } = process.env;

export default async function HomePage() {
  const featuredProductsHome = await getCollectionProducts({
    collection: FEATURED_PRODUCT_SLUG || '',
    reverse: true
  });
  return (
    <>
      <Hero />
      <Featuredproducts products={featuredProductsHome} />
      <Promo />
    </>
  );
}
