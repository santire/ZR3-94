import Head from 'next/head';
import { useEffect } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';

interface LayoutProps {
  children: React.ReactNode;
  meta: { title: string; description: string; icon?: string };
}
export default function Layout({ children, meta }: LayoutProps) {
  const { title, description, icon } = meta;
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });
  useEffect(() => {
    if (localStorage.getItem('scrollInto') === 'true') {
      scrollIntoView();
      localStorage.removeItem('scrollInto')
    }
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || 'favicon.ico'} />
      </Head>
      <main style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Header />
        <Navigation />
        <div ref={targetRef}>{children}</div>
        <Footer />
      </main>
    </>
  );
}
