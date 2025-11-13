import { createClient } from "@prismicio/client";
import type { PrismicDocument } from "@prismicio/types";

const API_ENDPOINT =
  import.meta.env.PRISMIC_API_ENDPOINT ??
  "https://astro-prismic-demo.prismic.io/api/v2";

const BLOG_TYPE = import.meta.env.PRISMIC_BLOG_TYPE ?? "blog_post";

const client = createClient(API_ENDPOINT);

export type BlogPostDocument = PrismicDocument<Record<string, any>>;

export async function getAllBlogPosts(): Promise<BlogPostDocument[]> {
  return client.getAllByType(BLOG_TYPE, {
    orderings: [{ field: "document.first_publication_date", direction: "desc" }],
  });
}

// Backwards compatible name if other modules still import getAllPosts.
export const getAllPosts = getAllBlogPosts;

export async function getBlogPostByUID(uid: string) {
  if (!uid) {
    throw new Error("Missing blog UID");
  }

  return client.getByUID(BLOG_TYPE, uid);
}

export async function getPage(uuid: string) {
  return client.getByUID("page", uuid, { pageSize: 1, page: 1 });
}
