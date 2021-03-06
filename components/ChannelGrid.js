import React, { Component } from 'react';
import Link from 'next/link';

export default class ChannelGrid extends Component {
  render() {
    const { channels } = this.props;

    return (
      <>
        <div className="channels">
        {
          channels.map(channel =>
            <Link href={`/channel?id=${channel.id}`} key={channel.id}>
              <a className="channel">
                <img src={channel.urls.logo_image.original} alt=""/>
                <h2>{channel.title}</h2>
              </a>
            </Link>
          )
        }
        </div>
        
        <style jsx>{`
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .channels a {
            color: #455A64;
            text-decoration: none;
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5rem;
          }
          .channel img {
            width: 100%;
          }
          h2 {
            padding: 5px;
          }
        `}</style>
      </>
    )
  }
}
