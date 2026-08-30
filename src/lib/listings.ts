import { getCollection, type CollectionEntry } from 'astro:content';
export type Listing = CollectionEntry<'listings'>;
export async function publishedListings(): Promise<Listing[]> {
  const all = await getCollection('listings');
  return all.filter((entry) => entry.data.draft === false).sort((a, b) => a.data.title.localeCompare(b.data.title));
}
