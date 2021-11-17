import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Track from './Track';

class MusicCard extends Component {
  render() {
    const { tracks } = this.props;

    const trackList = tracks.map((track) => (
      <Track
        key={ track.trackId }
        trackId={ track.trackId }
        trackName={ track.trackName }
        previewUrl={ track.previewUrl }
        trackInfo={ track }
      />
    ));

    return (
      <ul>{trackList}</ul>
    );
  }
}

MusicCard.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicCard;
