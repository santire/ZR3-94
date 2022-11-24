import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { Global, MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>ZR3-94</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          black: '#0A0A0A',
          white: '#FDFDFD',
          colorScheme: 'dark',
          fontFamily: 'Eurostile, sans-serif',
          headings: {
            fontFamily: 'Eurostile, sans-serif',
          },
        }}
      >
        <Global
          styles={(theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },

            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
              backgroundImage: "url('/assets/background.svg')",
              color: theme.colorScheme === 'dark' ? theme.white : theme.black,
              lineHeight: theme.lineHeight,
            },
            '@font-face': {
              fontFamily: 'Eurostile',
              src: 'url(\'./fonts/Eurostile.woff2\') format("woff2")',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 18,
            },
          })}
        />
        <Component {...pageProps} />
        <Analytics />
      </MantineProvider>
    </>
  );
}
