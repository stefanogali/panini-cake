'use client';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

export default function CustomCarousel({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const slider = useRef<HTMLDivElement>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const one = (e: MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - slider.current!.offsetLeft;
    scrollLeft.current = slider.current!.scrollLeft;
  };

  const two = (e: MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - slider.current!.offsetLeft;
    scrollLeft.current = slider.current!.scrollLeft;
  };

  const three = () => {
    isDown.current = false;
  };

  const four = () => {
    isDown.current = false;
  };

  const five = (e: MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current!.offsetLeft;
    const walk = x - startX.current;
    slider.current!.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    if (slider && slider.current) {
      const sliderRef = slider.current;
      sliderRef.addEventListener('mousedown', one);
      sliderRef.addEventListener('mousedown', two);
      sliderRef.addEventListener('mouseleave', three);
      sliderRef.addEventListener('mouseup', four);
      sliderRef.addEventListener('mousemove', five);

      return () => {
        sliderRef.removeEventListener('mousedown', one);
        sliderRef.removeEventListener('mousedown', two);
        sliderRef.removeEventListener('mouseleave', three);
        sliderRef.removeEventListener('mouseup', four);
        sliderRef.removeEventListener('mousemove', five);
      };
    }
  }, []);

  return (
    <div
      className={clsx(
        'outer-scroller-div relative flex cursor-pointer select-none overflow-y-hidden overflow-x-scroll transition-all will-change-transform',
        className
      )}
      ref={slider}
    >
      {children}
    </div>
  );
}
