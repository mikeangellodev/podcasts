import React, { Component } from 'react';

import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import PodcastList from '../components/PodcastList';

export default class Channel extends Component {
  static async getInitialProps({ query }) {
    const { id: idChannel } = query;

    const [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
    ]);

    const { body: { channel } } = await reqChannel.json();
    const { body: { audio_clips: audioClips } } = await reqAudios.json();
    const { body: { channels: series } } = await reqSeries.json();

    return { channel, audioClips, series };
  }

  render() {
    const { channel, audioClips, series } = this.props;

    return (
      <Layout title={channel.title}>
        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }}></div>

        <h1>{channel.title}</h1>

        {
          series.length > 0 && (
            <div>
              <h2>Series</h2>
              <div className="channels">
                <ChannelGrid channels={series} />
              </div>
            </div>
          )
        }

        <PodcastList audioClips={audioClips} />

        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
          
          h1 {
            font-weight: 600;
            padding: 15px;
          }
        `}</style>
      </Layout>
    )
  }
}
