'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import CloseCart from 'components/cart/close-cart';
import Search, { SearchSkeleton } from 'components/search-product';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, Suspense, useContext, useEffect, useState } from 'react';
import { CartContext } from 'store/cart-context';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cartContext = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  const clickHandler = () => {
    setIsOpen(false);
    cartContext.setIsOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="ml-auto flex h-11 w-11 items-center justify-center lg:hidden"
      >
        <Bars3Icon className="stroke-secondary-light-blue h-10 rounded-md border border-slate-50 bg-white p-1" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 bottom-0 flex h-full w-full max-w-[90%] flex-col overflow-auto bg-white sm:max-w-[70%] md:max-w-[50%]">
              <div className="p-6">
                <div className="mb-5 flex justify-end">
                  <button
                    className="mb-4 flex h-11 w-11 items-center justify-center"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <CloseCart />
                  </button>
                </div>

                <div className="mb-4 w-full">
                  <Suspense fallback={<SearchSkeleton />}>
                    <Search isFullWidth />
                  </Suspense>
                </div>
                {menu.length ? (
                  <nav>
                    <ul className="flex w-full flex-col">
                      {menu.map((item: Menu) => (
                        <li
                          className="hover:text-main-red-barn py-2 text-xl text-black transition-colors"
                          key={item.title}
                        >
                          <Link href={item.path} onClick={closeMobileMenu}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}
              </div>
              <div
                className="bg-secondary-light-blue mt-auto flex w-full cursor-pointer justify-center py-2"
                onClick={clickHandler}
              >
                <ShoppingCartIcon className="h-8 stroke-white" />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
