import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import { imagePlaceholder } from 'lib/utils';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item
          key={product.handle}
          className="animate-fade-in aspect-square w-full min-[480px]:w-[calc(50%-10px)] md:w-[calc(33.33%-13.6px)] lg:w-[calc(33.33%-13.3px)]"
        >
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              placeholder={`data:image/svg+xml;base64,${imagePlaceholder(358, 358)}`}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
