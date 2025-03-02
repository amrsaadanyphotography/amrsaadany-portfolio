// sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'nw6fltyv', // Replace with your actual Sanity project ID
  dataset: 'production', // Use the dataset name you created in Sanity
  apiVersion: '2023-10-22', // Use a specific API version
  useCdn: true, // Enable CDN for faster image loading
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
