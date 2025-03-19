import * as prismic from '@prismicio/client'
const API_ENDPOINT = "https://ezwin.cdn.prismic.io/api/v2";

const client = prismic.createClient(API_ENDPOINT);

export async function getAllPosts() {
  return client.get({
    predicates: [prismic.predicate.at('document.type', 'exam_question')]
  });
}

export async function getAllBlogs() {
  return client.get({
    predicates: [prismic.predicate.at('document.type', 'blog')]
  });
}

export async function getPage(uuid) {
  return client.getByUID('page', uuid, { pageSize: 1, page: 1 });
}