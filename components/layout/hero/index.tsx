import { Button } from 'components/button';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from 'public/arrow/arrow';
import Header from '../header';

const HeroContent = () => {
  return (
    <div className="container relative z-10 mx-auto max-w-[1140px]">
      <div className="mx-auto flex items-center justify-between">
        <Image src="/hero/hero-cake.png" width={400} height={520} alt="Cake" className="max-w-80" />
        <div className="flex max-w-2xl flex-col items-start">
          <h2 className="text-5xl  font-semibold leading-tight">
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
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-secondary-light-blue p-4 text-center">
      <Arrow width="1.2rem" height="1.2rem" className="rotate-90"></Arrow>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="mx-auto h-[100vh] bg-light-pink">
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-4/6 w-1/4 rounded-full bg-white opacity-60 blur-xl"></div>
      <Header />
      <HeroContent />
      <ArrowBounce />
    </section>
  );
}
