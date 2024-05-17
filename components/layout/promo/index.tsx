import Grid from 'components/grid';
import Image from 'next/image';
import Cake from 'public/icons/cake';
import Egg from 'public/icons/egg';
import PanCake from 'public/icons/pancake';
import Van from 'public/icons/van';

export default function Promo() {
  return (
    <section className="container mx-auto my-[70px] max-w-[1140px]">
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className="mb-8 text-header-2 font-semibold">Only the best ingredients</h2>
          <Grid className="flex flex-col">
            <Grid.Item className="mb-5 flex items-center">
              <Egg className="mr-2.5 w-10" />
              Pretium fusce id velit ut tortor
            </Grid.Item>
            <Grid.Item className="mb-5 flex items-center">
              <Van className=" mr-2.5 w-10" />
              Viverra ipsum nunc aliquet bibendum enim facilisis
            </Grid.Item>
            <Grid.Item className="mb-5 flex items-center">
              <Cake className=" mr-2.5 w-10" />
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim
            </Grid.Item>
            <Grid.Item className="flex items-center ">
              <PanCake className="mr-2.5 w-10" />
              Lobortis mattis aliquam
            </Grid.Item>
          </Grid>
        </div>
        <div>
          <Image
            src="/promo/special-cake.png"
            width={446}
            height={446}
            alt="Choco cake promotional"
          />
        </div>
      </div>
    </section>
  );
}
