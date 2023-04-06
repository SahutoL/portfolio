import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>SahutoL's Portfolio</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default Home;