import { getCollection, type CollectionEntry } from 'astro:content';

export type Pic = CollectionEntry<'pics'>

const pics = await getCollection('pics');
pics.sort((a, b) => Number.parseInt(a.slug) - Number.parseInt(b.slug));

export async function getPics(): Promise<Pic[]> {
    return pics;
}

export function picUrl(pic: Pic): string {
    return `/works/${pic.slug}`;
}