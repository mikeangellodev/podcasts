import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

export default class Home extends Component {
  static async getInitialProps() {
    const req = await fetch('https://api.audioboom.com/channels/recommended');
    const { body: channels } = await req.json();

    return { channels };
  }

  render() {
    const { channels } = this.props;

    return (
      <Layout title="Podcasts App">
        <ChannelGrid channels={channels} />
      </Layout>
    )
  }
}
