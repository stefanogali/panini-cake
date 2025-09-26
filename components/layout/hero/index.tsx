import { Button } from 'components/button';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from 'public/arrow/arrow';
import { Github } from 'public/icons/github';
import Header from '../header';

const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto max-w-[1140px] pt-10 lg:pt-0">
      <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
        <Image
          src="/hero/hero-cake.webp"
          width={400}
          height={520}
          alt="Cake"
          className="max-w-64 md:max-w-60 lg:max-w-80"
          priority
        />
        <div className="flex max-w-2xl flex-col items-center md:items-start">
          <h2 className="text-center text-3xl leading-tight font-semibold md:text-left lg:text-5xl">
            Free Next.Js template with <span className="whitespace-nowrap">Headless Shopify❤️</span>
          </h2>
          <div className="mt-8 flex flex-col gap-2.5 min-[380px]:flex-row">
            <Link href="/products">
              <Button>Go to products</Button>
            </Link>
            <Link href="https://github.com/stefanogali/panini-cake" target="_blank">
              <Button className="flex items-center gap-2">
                <Github className="fill-white" />
                Get template
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowBounce = () => {
  return (
    <div className="bg-secondary-light-blue absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce rounded-full p-4 text-center lg:block">
      <Arrow width="1.2rem" height="1.2rem" fill="#FFFFFF" className="rotate-90"></Arrow>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="bg-light-pink relative mx-auto overflow-hidden px-2.5 pb-10 lg:h-screen lg:pb-0">
      <div className="absolute top-0 right-0 bottom-0 left-0 m-auto h-4/6 w-1/4 rounded-full bg-white opacity-60 blur-xl"></div>
      <Header />
      <HeroContent />
      <ArrowBounce />
    </section>
  );
}
