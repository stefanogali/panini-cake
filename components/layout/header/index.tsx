import Grid from 'components/grid';
import MainLogo from 'public/logo/logo';

export default function Header() {
  return (
    <header className="relative z-10 mx-auto pt-12">
      <div className="flex flex-col items-center justify-center	">
        <MainLogo width="10rem" height="9.3rem" />
        <Grid className="mt-5 gap-x-8 rounded-full bg-main-red-barn bg-opacity-20 p-4 text-xl font-medium uppercase text-main-red-barn">
          <Grid.Item className="cursor-pointer">About</Grid.Item>
          <Grid.Item className="cursor-pointer">Our Products</Grid.Item>
          <Grid.Item className="cursor-pointer">Contact us</Grid.Item>
        </Grid>
      </div>
    </header>
  );
}
