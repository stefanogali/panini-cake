# [Next.js + Headless Shopify E-Commerce Template](https://panini-cake.vercel.app/)

This is a Next.Js + Typescript + Tailwindcss + headless Shopify free starter template.
This project is based on [Next.js Commerce starter template](https://github.com/vercel/commerce).

The live project can be found at [https://panini-cake.vercel.app/](https://panini-cake.vercel.app/)

![Hero Image](/public/template/screenshot.png?raw=true 'Panini Cake Shop hero')

A Next.js 14 and App Router-ready ecommerce template featuring:

- Shopify Storefront API
- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- React Server Components (RSCs) and Suspense
- Server Actions for mutations
- Edge Runtime
- New fetching and caching paradigms
- Dynamic OG images
- Styling with Tailwind CSS

## Instructions for running locally

Please fork or clone the repo

```bash
https://github.com/stefanogali/panini-cake
```

then install the dependencies with

```bash
npm install
```

You will need to use the environment variables [defined in `.env.example`](.env.example) to run this template. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

```bash
COMPANY_NAME="Your company"
TWITTER_CREATOR="@your company"
TWITTER_SITE="Your site"
SITE_NAME="your site name"
SHOPIFY_REVALIDATION_SECRET="XXXXXXXXXXXXXXXXX"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="XXXXXXXXXXXXXXXXX"
SHOPIFY_STORE_DOMAIN="YOUR_SHOP.myshopify.com"

FEATURED_PRODUCT_SLUG="special-cakes"
MAIN_MENU_NAME="main-menu"
```

Got to the [Shopify Partner website](https://www.shopify.com/uk/partners) and create a free account, you will then be able to create a free development store.

Once you are done, go to settings and find the apps section, then head to the [Shopify app store](https://apps.shopify.com/) and install the Headless app to build using the Storefront API.

From the Headless app you will need to generate the secret token and access token, which will then be used in your env variables.
You can refer to [this guide](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started)

```bash
SHOPIFY_REVALIDATION_SECRET="XXXXXXXXXXXXXXXXX"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="XXXXXXXXXXXXXXXXX"
```

Once replaced, you can run

```bash
npm run dev
```

and the app should be running on your local with no errors.

Add the products on your shopify admin dashboard, and create your pages (this template only has _about_ and _contact_ pages at the moment, but you can add yours).

For the Featured Products you will need to create new entries under your product collections on Shopify admin. Do not forger to change your FEATURED_PRODUCT_SLUG .env variable.

The current menu name is _main-menu_, but you can give any name in your Shopify admin and change the .env variable accordingly.

## Metafields

This template also supports custom fields if you wish to add your own extra sections for pages and products, directly editable from your Shopify dashboard.

Go to the [Shopify app store](https://apps.shopify.com/) and add ACF: Metafields Custom Fields. Start creating your custom metafields.
Currently this theme supports metafields on the _about_ and _contacts_ pages, you can specify what you want to retrieve in the metafields array inside those pages.
