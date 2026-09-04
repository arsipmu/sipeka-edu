import { defineCollection, z } from 'astro:content';

const beritaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional().default('Admin SIPEKA'),
    category: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
  })
});

export const collections = {
  'berita': beritaCollection,
};