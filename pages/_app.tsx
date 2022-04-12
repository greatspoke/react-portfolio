import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>My Top App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
