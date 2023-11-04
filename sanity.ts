import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ||'production',
  apiVersion: '2021-03-25', 
  useCdn: process.env.NODE_ENV === 'production', 
})

export const urlFor = (source: any) => {
  return createImageUrlBuilder(client).image(source);
}