// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    snippet: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('EzWin Academy'),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // For the current markdown structure
    name: z.string().optional(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
};