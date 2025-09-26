import clsx from 'clsx';
import Grid from 'components/grid';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import MainLogo from 'public/logo/logo';

export default async function Header({ isInternalPage }: { isInternalPage?: boolean }) {
  // Get menu from shopify
  const { MAIN_MENU_NAME } = process.env;
  const menu = await getMenu(MAIN_MENU_NAME || '');

  return (
    <header className={clsx('relative z-10 mx-auto', !isInternalPage && 'lg:pt-12')}>
      <div
        className={clsx(
          'flex flex-col items-center justify-center',
          isInternalPage && 'bg-light-pink mb-[70px]'
        )}
      >
        <Link href="/">
          <MainLogo
            width="10rem"
            height="9.3rem"
            aria-label="Logo"
            className={clsx(
              'hidden lg:block lg:max-w-none',
              isInternalPage && 'my-1 max-h-32 max-w-32'
            )}
          />
        </Link>
        {menu.length ? (
          <Grid
            className={clsx(
              'bg-main-red-barn/20 text-main-red-barn mt-5 hidden gap-x-8 rounded-full px-5 py-2.5 text-xl font-medium uppercase lg:flex',
              isInternalPage && 'bg-transparent pt-0'
            )}
          >
            {menu.map((item: Menu) => (
              <Grid.Item key={item.title} className="cursor-pointer">
                <Link href={item.path}>{item.title}</Link>
              </Grid.Item>
            ))}
          </Grid>
        ) : null}
      </div>
    </header>
  );
}
