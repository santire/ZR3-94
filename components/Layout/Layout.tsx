import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { useRouter } from 'next/router';
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
  const [pushedRoute, setPushedRoute] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady || pushedRoute) return;
    const { query } = router;
    if (query.scroll === 'true') {
      scrollIntoView();
      router.push(router.basePath);
      setPushedRoute(true);
    }
  }, [router.isReady, router.query, pushedRoute, setPushedRoute]);
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
