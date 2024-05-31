import { Button } from 'components/button';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from 'public/arrow/arrow';
import Header from '../header';

const HeroContent = () => {
  return (
    <div className="container relative z-10 mx-auto max-w-[1140px]">
      <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
        <Image
          src="/hero/hero-cake.webp"
          width={400}
          height={520}
          alt="Cake"
          className="max-w-64 md:max-w-60 lg:max-w-80"
          priority
        />
        <div className="flex max-w-2xl flex-col items-center  md:items-start">
          <h2 className="text-center text-3xl font-semibold leading-tight md:text-left lg:text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <Link href="/products">
            <Button className="mt-8 ">Go to products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ArrowBounce = () => {
  return (
    <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce rounded-full bg-secondary-light-blue p-4 text-center lg:block">
      <Arrow width="1.2rem" height="1.2rem" fill="#FFFFFF" className="rotate-90"></Arrow>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative mx-auto overflow-hidden bg-light-pink px-2.5 pb-10 lg:h-[100vh] lg:pb-0">
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-4/6 w-1/4 rounded-full bg-white opacity-60 blur-xl"></div>
      <Header />
      <HeroContent />
      <ArrowBounce />
    </section>
  );
}
