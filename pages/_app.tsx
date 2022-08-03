import { AppProps } from 'next/app';
import Head from 'next/head';
import { Global, MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>ZR394</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          fontFamily: 'Eurostile, sans-serif',
          headings: {
            fontFamily: 'Eurostile, sans-serif',
          },
        }}
      >
        <Global
          styles={[
            {
              '@font-face': {
                fontFamily: 'Eurostile',
                src: `url('./fonts/Eurostile.woff2') format("woff2")`,
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 18
              },
            },
          ]}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
