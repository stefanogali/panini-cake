import seoFragment from '../fragments/seo';

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
        identifiers: [
          { key: "text", namespace: "panini-cake" }
          { key: "text2", namespace: "panini-cake" }
          { key: "multiple_text", namespace: "panini-cake" }
        ]
      ) {
        ...metafield
      }
    }
  }
  ${seoFragment}
  ${metafield}
`;

export const getPageQuery = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
      metafields(
        identifiers: [
          { key: "text", namespace: "panini-cake" }
          { key: "text2", namespace: "panini-cake" }
          { key: "multiple_text", namespace: "panini-cake" }
        ]
      ) {
        ...metafield
      }
    }
  }
  ${pageFragment}
`;

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
