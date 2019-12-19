/* eslint-disable */

import App from "next/app";
import React from "react";

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
    return <Component {...pageProps} />;
  }
}
