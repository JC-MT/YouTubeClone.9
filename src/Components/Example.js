import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const opts = {
      height: this.props.thumbnails.height,
      width: this.props.thumbnails.width,
    };

    return <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Example