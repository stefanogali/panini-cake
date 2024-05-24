import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center rounded-full bg-main-red-barn p-3.5">
      <ShoppingCartIcon className={clsx('h-6 transition-all ease-in-out', className)} />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-full bg-main-red-barn text-[11px] font-medium leading-normal text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
