'use client';

import { Button } from 'components/button';
import { Product } from 'lib/shopify/types';

export default function FeaturedCard({ product }: { product: Product }) {
  return (
    <div className="mr-5 w-[28%] shrink-0 overflow-hidden rounded-xl bg-secondary-light-blue bg-opacity-50 pb-2.5 shadow-md last:mr-0">
      <div
        className="no-repat h-52 w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${product.featuredImage.url}')`
        }}
      ></div>
      <div className="p-4">
        <h2 className="font-gochi-hand text-4xl font-semibold text-white">{product.title}</h2>
        <p className="text-base leading-none text-white">
          {product.description.substring(0, 90)}...
        </p>
        <Button className="mt-5">View Product</Button>
      </div>
    </div>
  );
}
