import type { Metadata } from 'next';

import ContactForm from 'components/contact-form';
import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const metafields = [{ key: 'multiple_text_contact', namespace: 'panini-cake' }];
  const page = await getPage('contact', metafields);

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
  const metafields = [{ key: 'multiple_text_contact', namespace: 'panini-cake' }];
  const page = await getPage('contact', metafields);

  if (!page) return notFound();

  const GoogleMapEmbed = () => (
    <div className="mb-[70px] leading-7">
      <h2 className="mb-8 text-header-2 font-semibold">Find us</h2>
      <p className="leading-7">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.35588931548!2d12.37084718518173!3d41.91020830050026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e0!3m2!1sen!2suk!4v1716289994249!5m2!1sen!2suk"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-2.5"
      ></iframe>
      <h3 className="mt-2.5 text-header-3 font-semibold">Our location</h3>
      <p>12190 Beahan Street 59025</p>
      <p>West Virginia</p>
      <p>(979) 541-3809</p>
      <p>info@hello.com</p>
    </div>
  );

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-[70px]" html={page.body as string} />
      <GoogleMapEmbed />
      <ContactForm />
      {page.metafields &&
        page.metafields?.filter((metafield) => metafield?.key === 'multiple_text_contact').length >
          0 && (
          <>
            <h2 className="mb-8 text-header-2 font-semibold">Something else from metafields</h2>
            <Prose
              className="mb-[70px]"
              html={
                page.metafields?.filter(
                  (metafield) => metafield?.key === 'multiple_text_contact'
                )[0]?.value as string
              }
            />
          </>
        )}
    </>
  );
}
