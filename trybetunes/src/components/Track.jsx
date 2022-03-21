import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Track extends Component {
  constructor() {
    super();

    this.state = {
      favorite: false,
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { favorite } = this.state;

    if (!favorite) {
      this.addFavorite();
    } else {
      this.removeFavorite();
    }
  }

  addFavorite() {
    const { trackInfo } = this.props;

    this.setState({
      favorite: true,
      loading: true,
    }, async () => {
      try {
        await addSong(trackInfo);
        this.setState({ loading: false });
      } catch (e) {
        console.log(e);
      }
    });
  }

  removeFavorite() {
    const { trackInfo } = this.props;

    this.setState({
      favorite: false,
      loading: true,
    }, async () => {
      try {
        await removeSong(trackInfo);
        this.setState({ loading: false });
      } catch (e) {
        console.log(e);
      }
    });
  }

  render() {
    const { favorite, loading } = this.state;
    const { trackId, trackName, previewUrl } = this.props;
    const fav = localStorage.getItem('favorite_songs');
    console.log(fav);
    return (
      <li>
        <span>{ trackName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label
          htmlFor={ `checkbox-${trackId}` }
          data-testid={ `checkbox-music-${trackId}` }
        >
          { loading
            ? <Loading />
            : (
              <input
                type="checkbox"
                checked={ favorite }
                id={ `checkbox-${trackId}` }
                onChange={ this.handleChange }
              />
            )}
        </label>
      </li>
    );
  }
}

Track.propTypes = {
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  trackInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
  previewUrl: PropTypes.string.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default Track;
