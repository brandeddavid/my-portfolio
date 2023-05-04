import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='z-0 h-screen snap-y snap-mandatory overflow-scroll text-gray-500'>
      <Head>
        <title>David&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
    </main>
  );
}
