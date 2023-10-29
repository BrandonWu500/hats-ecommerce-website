import imageFragment from '@/lib/shopify/fragments/image';
import seoFragment from '@/lib/shopify/fragments/seo';

const articleFragment = /* GraphQL */ `
  fragment article on Article {
    ... on Article {
      content
      excerpt
      image {
        ...image
      }
      id
      title
      authorV2 {
        name
        bio
      }
      seo {
        ...seo
      }
      publishedAt
      handle
      tags
    }
  }
  ${imageFragment}
  ${seoFragment}
`;

export const getArticlesQuery = /* GraphQL */ `
  query getArticles {
    articles(first: 10) {
      edges {
        node {
          ...article
        }
      }
    }
  }
  ${articleFragment}
`;

export const getLatestArticleQuery = /* GraphQL */ `
  query getLatestArticle {
    articles(first: 1) {
      edges {
        node {
          ...article
        }
      }
    }
  }
  ${articleFragment}
`;
