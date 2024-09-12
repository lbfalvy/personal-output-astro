import { defineCollection, z } from 'astro:content';
const pics = defineCollection({
    type: 'content',
    schema: z.strictObject({
        title: z.string(),
        width: z.number(),
        height: z.number(),
        price: z.string().optional(),
    })
});
export const collections = { pics } as const;