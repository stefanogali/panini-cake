import type { Metadata } from 'next';

import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('about');

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page() {
  const page = await getPage('about');

  console.log('page', page);

  if (!page) return notFound();

  const chefsImgClassNames = 'mb-2.5 h-40 w-40 rounded-full border-8 border-secondary-light-blue';

  const Chefs = () => (
    <>
      <h2 className="mb-8 text-header-2 font-semibold">Our chefs</h2>
      <div className="mb-[70px] flex justify-between leading-7">
        <div className="pr-5">
          <img src="/about/chef-1.png" alt="Chef 1" className={`${chefsImgClassNames}`} />
          <h4 className="text-header-4 font-semibold">James Red</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>
        <div className="pr-5">
          <img src="/about/chef-2.png" alt="Chef 2" className={`${chefsImgClassNames}`} />
          <h4 className="text-header-4 font-semibold">Mark Black</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>
        <div>
          <img src="/about/chef-3.png" alt="Chef 3" className={`${chefsImgClassNames}`} />
          <h4 className="text-header-4 font-semibold">Jason Green</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-[70px]" html={page.body as string} />
      {/* <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`} 
      </p> */}
      <Chefs />
      {page.metafields && (
        <>
          <h2 className="mb-8 text-header-2 font-semibold">Something else from metafields</h2>
          <Prose
            className="mb-[70px]"
            html={
              page.metafields?.filter((metafield) => metafield?.key === 'multiple_text').length > 0
                ? (page.metafields.filter((metafield) => metafield?.key === 'multiple_text')[0]
                    ?.value as string)
                : ''
            }
          />{' '}
        </>
      )}
    </>
  );
}
