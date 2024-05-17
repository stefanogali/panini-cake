import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full bg-main-red-barn px-[1.87rem] py-[0.63rem] leading-none text-white',
        className
      )}
    >
      {children}
    </button>
  );
}
