import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/listings' }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    mechanism: z.enum(['weight-activated', 'motorized', 'caged', 'pole-baffle']),
    mount: z.enum(['hang', 'pole', 'either']),
    seedTypes: z.array(z.string()),
    capacity: z.string(),
    cardinalPerch: z.union([z.boolean(), z.literal('unknown')]),
    sources: z.array(z.object({ url: z.string().url(), label: z.string() })),
    verdict: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = { listings };
