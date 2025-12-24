import clsx from 'clsx';

export function Button(props: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-main-red-barn cursor-pointer rounded-full px-[1.87rem] py-[0.63rem] leading-none text-white',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
