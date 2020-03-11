import * as React from 'react';
import NextApp, { AppContext, Container, AppProps } from 'next/app';
// import App from 'next/app'
import Head from 'next/head';
import GlobalLayout from '@components/Global';
import Header from '@components/layout/Header';
import '@assets/tailwind.css';

class App extends NextApp {
  render() {
    const { pageProps, Component }: AppProps = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Next.js TypeScript Quickstart</title>
        </Head>
        <GlobalLayout />
        <Header />

        <Component {...pageProps} />
      </>
    );
  }

  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: Object;
  }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
}

export default App;
