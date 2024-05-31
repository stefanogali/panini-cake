import clsx from 'clsx';

export function Button(props: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-full bg-main-red-barn px-[1.87rem] py-[0.63rem] leading-none text-white',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
