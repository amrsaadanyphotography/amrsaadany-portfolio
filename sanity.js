// sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.SANITY_PROJECT_ID; // Use environment variable
const dataset = process.env.SANITY_DATASET; // Use environment variable

if (!projectId || !dataset) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_DATASET in environment variables');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2023-10-22', // Use a specific API version
  useCdn: true, // Enable CDN for faster image loading
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
