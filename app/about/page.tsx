import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import { Metafields } from 'lib/shopify/types';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const metafields = [
    { key: 'chef_1_bio', namespace: 'panini-cake' },
    { key: 'chef_2_bio', namespace: 'panini-cake' },
    { key: 'chef_3_bio', namespace: 'panini-cake' },
    { key: 'multiple_text_about', namespace: 'panini-cake' }
  ];

  const page = await getPage('about', metafields);

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

export default async function AboutPage() {
  const metafields = [
    { key: 'chef_1_bio', namespace: 'panini-cake' },
    { key: 'chef_2_bio', namespace: 'panini-cake' },
    { key: 'chef_3_bio', namespace: 'panini-cake' },
    { key: 'multiple_text_about', namespace: 'panini-cake' }
  ];

  const page = await getPage('about', metafields);
  if (!page) return notFound();

  const chefBioFields = ['chef_1_bio', 'chef_2_bio', 'chef_3_bio'];
  const chefsBio =
    page.metafields?.filter((metafield) => chefBioFields.includes(metafield?.key)) || [];

  const chefsImgClassNames =
    'mb-2.5 h-35 w-35 sm:h-40 sm:w-40 rounded-full border-8 border-[#fff0dd]';

  const Chefs = ({ chefsBio }: { chefsBio: Metafields[] }) => {
    return (
      <>
        <h2 className="mb-8 text-header-2 font-semibold leading-none">Our chefs</h2>
        <div className="mb-[70px] flex flex-wrap justify-between leading-7">
          <div className="basis-[48%] sm:basis-[31%]">
            <Image
              src="/about/chef-1.png"
              alt="Chef 1"
              className={`${chefsImgClassNames}`}
              width="250"
              height="250"
            />
            <h4 className="text-header-4 font-semibold">James Red</h4>
            <p>{chefsBio[0]?.value}</p>
          </div>
          <div className="basis-[48%] sm:basis-[31%]">
            <Image
              src="/about/chef-2.png"
              alt="Chef 2"
              className={`${chefsImgClassNames}`}
              width="250"
              height="250"
            />
            <h4 className="text-header-4 font-semibold">Mark Black</h4>
            <p>{chefsBio[1]?.value}</p>
          </div>
          <div className="mt-5 basis-[48%] sm:mt-0 sm:basis-[31%]">
            <Image
              src="/about/chef-3.png"
              alt="Chef 3"
              className={`${chefsImgClassNames}`}
              width="250"
              height="250"
            />
            <h4 className="text-header-4 font-semibold">Jason Green</h4>
            <p>{chefsBio[2]?.value}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-[70px]" html={page.body as string} />
      <Chefs chefsBio={chefsBio} />
      {page.metafields &&
        page.metafields?.filter((metafield) => metafield?.key === 'multiple_text_about').length >
          0 && (
          <>
            <h2 className="mb-8 text-header-2 font-semibold leading-none">
              Something else from metafields
            </h2>
            <Prose
              className="mb-[70px]"
              html={
                page.metafields?.filter((metafield) => metafield?.key === 'multiple_text_about')[0]
                  ?.value as string
              }
            />
          </>
        )}
    </>
  );
}
