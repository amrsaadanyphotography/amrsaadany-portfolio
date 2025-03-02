import { sanityClient, urlFor } from '../sanity';
import Head from 'next/head';
import Image from 'next/image';

export default function Home({ videos, photos }) {
  return (
    <div>
      <Head>
        <title>Amr Saadany Portfolio</title>
        <meta name="description" content="Portfolio of Amr Saadany - Film & Photography" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Amr Saadany Portfolio</h1>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const queryVideos = `*[_type == "video"]{_id, title, "url": video.asset->url}`;
  const queryPhotos = `*[_type == "photo"]{_id, title, image}`;

  const videos = await sanityClient.fetch(queryVideos);
  const photos = await sanityClient.fetch(queryPhotos);

  return {
    props: {
      videos,
      photos,
    },
  };
}
