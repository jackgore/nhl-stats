/* eslint-disable */

import App from "next/app";
import React from "react";
import Layout from "../components/Layout";

export default class MyApp extends App {
  static async getInitialProps(props) {
    const { Component } = props;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps();
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
