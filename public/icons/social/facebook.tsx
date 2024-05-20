import clsx from 'clsx';

export default function Facebook(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="41"
      height="42"
      viewBox="0 0 41 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx('fill-current', props.className)}
    >
      <g clipPath="url(#clip0_9_404)">
        <path
          d="M41 21.1286C41 9.45782 31.8211 -0.00268555 20.5 -0.00268555C9.17375 -6.05467e-05 -0.00512695 9.45782 -0.00512695 21.1312C-0.00512695 31.6758 7.49275 40.4171 17.2917 42.0026V27.2369H12.0899V21.1312H17.2969V16.4718C17.2969 11.1772 20.3591 8.25294 25.0407 8.25294C27.2855 8.25294 29.6302 8.66506 29.6302 8.66506V13.8626H27.0446C24.5001 13.8626 23.7057 15.4927 23.7057 17.1648V21.1286H29.3893L28.4822 27.2343H23.7031V41.9999C33.5021 40.4144 41 31.6732 41 21.1286Z"
          fill="#864459"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_404">
          <rect width="41" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
