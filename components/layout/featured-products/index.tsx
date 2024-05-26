'use client';

import CustomCarousel from 'components/custom-carousel';
import FeaturedCard from 'components/featured-card';
import { Product } from 'lib/shopify/types';

export default function Featuredproducts({ products }: { products: Product[] }) {
  return (
    <>
      <section className="container mx-auto my-[70px] max-w-[1140px] pl-2.5">
        <h2 className="mb-2.5 text-center text-header-2 font-semibold">Featured Products</h2>
        <h3 className="mx-auto max-w-3xl text-center text-header-3 leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </h3>
        <CustomCarousel className="mt-12">
          {products?.map((product: Product) => <FeaturedCard key={product.id} product={product} />)}
        </CustomCarousel>
      </section>
    </>
  );
}
