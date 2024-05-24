import clsx from 'clsx';
import Link from 'next/link';

import Grid from 'components/grid';
import MainLogo from 'public/logo/logo';

export default function Header({ isInternalPage }: { isInternalPage?: boolean }) {
  return (
    <header className={clsx('relative z-10 mx-auto', !isInternalPage && 'pt-12')}>
      <div
        className={clsx(
          'flex flex-col items-center justify-center',
          isInternalPage && 'mb-[70px] bg-light-pink'
        )}
      >
        <Link href="/">
          <MainLogo
            width="10rem"
            height="9.3rem"
            className={clsx(isInternalPage && 'max-h-32 max-w-32 pt-5')}
          />
        </Link>
        <Grid
          className={clsx(
            'mt-5 gap-x-8 rounded-full bg-main-red-barn bg-opacity-20 p-2.5 text-xl font-medium uppercase text-main-red-barn',
            isInternalPage && 'bg-transparent pt-0'
          )}
        >
          <Link href="/about">
            <Grid.Item className="cursor-pointer">About</Grid.Item>
          </Link>
          <Link href="/products">
            <Grid.Item className="cursor-pointer">Our Products</Grid.Item>
          </Link>
          <Link href="/contact">
            <Grid.Item className="cursor-pointer">Contact us</Grid.Item>
          </Link>
        </Grid>
      </div>
    </header>
  );
}
