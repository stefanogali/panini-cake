import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex items-center justify-center rounded-full bg-main-red-barn p-2 transition-colors">
      <XMarkIcon className={clsx('h-6 stroke-white transition-all ease-in-out', className)} />
    </div>
  );
}
