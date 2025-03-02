import { sanityClient, urlFor } from '../sanity';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amr Saadany Portfolio</title>
        <meta name="description" content="Portfolio of Amr Saadany - Film & Photography" />
      </Head>
      <main>
        <h1>Welcome to Amr Saadany's Portfolio</h1>
      </main>
    </div>
  );
}
