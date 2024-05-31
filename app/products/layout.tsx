import Header from 'components/layout/header';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isInternalPage />
      <div className="container mx-auto flex max-w-[1140px] px-2.5">
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
      </div>
    </>
  );
}
