import Head from "next/head";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";

interface LayoutProps {
  children: React.ReactNode;
  meta: { title: string, description: string, icon?: string }
}
export default function Layout({ children, meta }: LayoutProps) {
  const { title, description, icon } = meta
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || "favicon.ico"} />
      </Head>
      <main style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Header />
        <Navigation />
        {children}
      </main>

    </>
  )
}
