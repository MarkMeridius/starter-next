import { Head, Html, Main, NextScript } from 'next/document';

export default function document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <meta property="og:title" content="Starter project" />
      <meta property="og:type" content="starter" />
      <meta property="og:image" content="/d-icon.png" />
      <meta
        property="og:description"
        content="Its probably raining where i live"
      />
      <meta name="theme-color" content="#f20079" />

      <meta name="twitter:card" content="summary_large_image"></meta>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
