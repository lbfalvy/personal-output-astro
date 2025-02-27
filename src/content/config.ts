import { defineCollection, z } from 'astro:content';
const pics = defineCollection({
    type: 'content',
    schema: ({ image }) => z.strictObject({
        title: z.string(),
        width: z.number(),
        height: z.number(),
        image: z.string(),
        status: z.enum(['sold', 'private', 'available']).default('available'),
        price: z.string().or(z.number()).optional(),
    }).refine(x => x.status != 'available' || 'price' in x)
});
export const collections = { pics } as const;