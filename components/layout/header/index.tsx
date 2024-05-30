import clsx from 'clsx';
import Grid from 'components/grid';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import MainLogo from 'public/logo/logo';

export default async function Header({ isInternalPage }: { isInternalPage?: boolean }) {
  const menu = await getMenu('main-menu');

  return (
    <header className={clsx('relative z-10 mx-auto', !isInternalPage && 'lg:pt-12')}>
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
            className={clsx(
              'max-w-[5.5rem] md:max-w-[7.5rem] lg:max-w-none',
              isInternalPage && 'max-h-32 max-w-32 pt-5'
            )}
          />
        </Link>
        {menu.length ? (
          <Grid
            className={clsx(
              'mt-5 hidden gap-x-8 rounded-full bg-main-red-barn bg-opacity-20 px-5 py-2.5 text-xl font-medium uppercase text-main-red-barn lg:flex',
              isInternalPage && 'bg-transparent pt-0'
            )}
          >
            {menu.map((item: Menu) => (
              <Link key={item.title} href={item.path}>
                <Grid.Item className="cursor-pointer">{item.title}</Grid.Item>
              </Link>
            ))}
          </Grid>
        ) : null}
      </div>
    </header>
  );
}
