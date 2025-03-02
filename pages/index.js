import { sanityClient, urlFor } from '@/sanity';
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

        <h2 className="text-2xl font-semibold my-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video._id} className="border rounded p-2 shadow-lg">
              <video controls className="w-full rounded-lg">
                <source src={video.url} type="video/mp4" />
              </video>
              <p className="text-center mt-2 font-medium">{video.title}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold my-4">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo._id} className="border rounded overflow-hidden shadow-lg">
              <Image
                src={urlFor(photo.image).width(400).url()}
                alt={photo.title}
                width={400}
                height={300}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
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
