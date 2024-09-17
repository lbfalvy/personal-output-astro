import { getCollection, type CollectionEntry } from 'astro:content';

export type Pic = CollectionEntry<'pics'>

function picToId(pic: Pic): number {
    return Number.parseInt(pic.slug.split('-')[0])
}

export async function getPics(): Promise<Pic[]> {
    const pics = await getCollection('pics');
    pics.sort((a, b) => picToId(a) - picToId(b));
    return pics;
}

export function picUrl(pic: Pic): string {
    return `/works/${pic.slug}`;
}