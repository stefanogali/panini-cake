import Header from 'components/layout/header';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isInternalPage />
      <div className="container mx-auto flex max-w-[1140px]">
        {/* <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div> */}
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        {/* <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div> */}
      </div>
    </>
  );
}
