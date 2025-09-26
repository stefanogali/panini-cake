import clsx from 'clsx';

const dots = 'mx-px inline-block h-1 w-1 animate-blink rounded-md';

const LoadingDots = ({ className }: { className: string }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={clsx(dots, className)} />
      <span className={clsx(dots, 'animation-delay-200', className)} />
      <span className={clsx(dots, 'animation-delay-400', className)} />
    </span>
  );
};

export default LoadingDots;
