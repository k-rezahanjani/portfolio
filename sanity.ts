import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: 'rl5a80u6',
  dataset: 'production',
  apiVersion: '2021-03-25', 
  useCdn: true, 
})

export const urlFor = (source: any) => {
  return createImageUrlBuilder(client).image(source);
}