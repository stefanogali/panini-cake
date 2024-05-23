import seoFragment from '../fragments/seo';
import { MetafieldId } from '../types';

const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${seoFragment}
`;

export const getPageQuery = (idsArray: MetafieldId[]): string => {
  const metafieldIdArray = idsArray.map(
    (metafieldId) => `{ key: "${metafieldId.key}", namespace: "${metafieldId.namespace}" }`
  );

  const metafield = /* GraphQL */ `
    fragment metafield on Metafield {
      id
      value
      type
      key
    }
  `;

  const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
      metafields(
        identifiers: [${metafieldIdArray}]
      ) {
        ...metafield
      }
    }
  }
  ${seoFragment}
  ${metafield}
`;

  const query = `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
      metafields(
        identifiers: [${metafieldIdArray}]
      ) {
        ...metafield
      }
    }
  }
  ${pageFragment}
`;

  return query;
};

export const getPagesQuery = /* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`;
