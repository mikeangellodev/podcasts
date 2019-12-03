import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default class Layout extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <header>
          <Link href="/">
            <a>Podcasts</a>
          </Link>
        </header>

        {children}

        <style jsx>{`
          header {
            color: #fff;
            background-color: #8756ca;
            padding: 15px;
            text-align: center;
          }

          header a {
            color: white;
            text-decoration: none;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            background-color: white;
            font-family: system-ui
          }
        `}</style>
      </>
    )
  }
}
