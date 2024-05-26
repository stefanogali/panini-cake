import { Button } from 'components/button';
import AmericanExpress from 'public/icons/payments/americanexp';
import Discover from 'public/icons/payments/discover';
import Mastercard from 'public/icons/payments/mastercard';
import Paypal from 'public/icons/payments/paypal';
import Visa from 'public/icons/payments/visa';
import SendNewsletterBtn from 'public/icons/sendnews';
import Facebook from 'public/icons/social/facebook';
import Instagram from 'public/icons/social/instagram';
import Tiktok from 'public/icons/social/tiktok';
import MainLogo from 'public/logo/logo';

export default function Footer() {
  const CompanyAddress = () => (
    <div>
      <MainLogo width="93px" height="88px" />
      <div className="mt-2.5 leading-tight">
        <p>12190 Beahan Street</p>
        <p>59025</p>
        <p>West Virginia</p>
        <p>(979) 541-3809</p>
        <p>info@hello.com</p>
      </div>
    </div>
  );

  const Newsletter = () => (
    <div className="flex max-w-96 flex-col items-end pt-[2rem]">
      <h3 className="text-right text-header-3 font-semibold">Join our newsletter</h3>
      <form className="relative mt-5 flex min-w-72 items-center ">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-full bg-[#ffefef]  py-2.5 pl-5 outline-none"
        />
        <Button className="absolute right-0 bg-white px-[10px]">
          <SendNewsletterBtn width="30px" height="30px" />
        </Button>
      </form>
      <p className="pt-2.5 text-right leading-tight">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium
      </p>
    </div>
  );

  const PaymentLogos = () => (
    <div className="flex items-center gap-5">
      <Visa />
      <Mastercard />
      <AmericanExpress />
      <Discover />
      <Paypal />
    </div>
  );

  const SocialIcons = () => (
    <div className="flex items-center gap-5 pt-[1.8rem]">
      <Facebook className="max-w-[1.8rem]" />
      <Instagram className="max-w-[1.8rem]" />
      <Tiktok className="max-w-[1.8rem]" />
    </div>
  );

  return (
    <footer className="mt-[70px] bg-light-pink pb-10 pt-12">
      <div className="container mx-auto flex max-w-[1140px] flex-col items-center px-2.5">
        <div className="flex w-full justify-between">
          <CompanyAddress />
          <Newsletter />
        </div>
        <div className="mt-[4.3rem] flex w-full flex-col items-center justify-center ">
          <PaymentLogos />
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
