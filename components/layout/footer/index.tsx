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
    <div className="pt-[1.87rem] text-center sm:pt-0 sm:text-left">
      <MainLogo width="93px" height="88px" className="mx-auto sm:mx-0" />
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
    <div className="flex max-w-96 flex-col items-center sm:items-end sm:pt-8">
      <h3 className="text-header-3 text-center font-semibold sm:text-right">Join our newsletter</h3>
      <form className="relative mt-5 flex w-full max-w-72 items-center">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-full bg-[#ffefef] py-2.5 pl-5 outline-hidden"
        />
        <Button className="absolute right-0 bg-white px-[10px]" aria-label="Newsletter">
          <SendNewsletterBtn width="30px" height="30px" />
        </Button>
      </form>
      <p className="pt-2.5 text-center leading-tight sm:text-right">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium
      </p>
    </div>
  );

  const PaymentLogos = () => (
    <div className="flex flex-wrap items-center justify-center gap-5">
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
    <footer className="bg-light-pink mt-[70px] pt-12 pb-10">
      <div className="container mx-auto flex max-w-[1140px] flex-col items-center px-2.5">
        <div className="flex w-full flex-col-reverse items-center justify-center sm:flex-row sm:items-start sm:justify-between">
          <CompanyAddress />
          <Newsletter />
        </div>
        <div className="mt-[4.3rem] flex w-full flex-col items-center justify-center">
          <PaymentLogos />
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
