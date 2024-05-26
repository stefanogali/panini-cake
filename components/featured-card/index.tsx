'use client';

import { Button } from 'components/button';
import { Product } from 'lib/shopify/types';
import { useRouter } from 'next/navigation';

export default function FeaturedCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div className="w-3/5 shrink-0 cursor-grab overflow-hidden rounded-xl bg-secondary-light-blue bg-opacity-50 pb-2.5 shadow-md last:mr-0 sm:w-2/5 lg:w-[28%]">
      <div
        className="no-repat h-52 w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${product.featuredImage.url}')`
        }}
      ></div>
      <div className="p-4">
        <h2 className="font-gochi-hand text-4xl font-semibold text-main-red-barn">
          {product.title}
        </h2>
        <p className="text-base leading-none text-white">
          {product.description.substring(0, 90)}...
        </p>
        <Button onClick={() => router.push(`/product/${product.handle}`)} className="mt-5">
          View Product
        </Button>
      </div>
    </div>
  );
}
