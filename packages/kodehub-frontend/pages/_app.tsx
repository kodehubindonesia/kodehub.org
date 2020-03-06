import * as React from "react";
import NextApp, { AppContext, Container } from "next/app";
// import App from 'next/app'
import Head from 'next/head'
import GlobalLayout from '@components/Global'
import Header from '@components/layout/Header';
import '@assets/tailwind.css';


class App extends NextApp {
    render() {
        const { pageProps, Component } = this.props;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Next.js TypeScript Quickstart</title>
                </Head>
                <GlobalLayout />
                <Header />

                <Component {...pageProps} />
            </>
        );
    }

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

}

export default App;


// import * as React from 'react'
// import App from 'next/app'
// import Head from 'next/head'
// import GlobalLayout from '@components/Global'

// class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//         const pageProps = Component.getInitialProps
//             ? await Component.getInitialProps(ctx)
//             : {};

//         return { pageProps };
//     }

//     public render() {
//         const { Component, pageProps } = this.props;
//         console.log(this.props);
//         return (
//             <>
//                 <Head>
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                     <title>Next.js TypeScript Quickstart</title>
//                 </Head>
//                 <GlobalLayout />

//                 <Component {...pageProps} />
//             </>
//         );
//     }
// }

// export default MyApp;