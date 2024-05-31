import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import FilterList from 'components/layout/products-filter/filter';
import Search from 'components/search-product';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function ProductsPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });

  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      <div className="mb-2.5 flex justify-between">
        <Search />
        <FilterList list={sorting} />
      </div>

      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="flex-wrap gap-5">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
