import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      albumID: id,
      artist: '',
      albumName: '',
      tracks: [],
    };

    this.fetchAlbum = this.fetchAlbum.bind(this);
  }

  componentDidMount() {
    const { albumID } = this.state;
    const data = this.fetchAlbum(albumID);

    data.then((musics) => {
      const artist = musics[0].artistName;
      const albumName = musics[0].collectionName;
      const tracks = musics.slice(1);

      this.setState({
        artist,
        albumName,
        tracks,
      });
    });
  }

  async fetchAlbum(id) {
    const fetchMusics = await getMusics(id);

    return fetchMusics;
  }

  render() {
    const { artist, albumName, tracks } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <h1 data-testid="album-name">{ albumName }</h1>
        <h2 data-testid="artist-name">{ artist }</h2>
        <MusicCard tracks={ tracks } />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
  ])).isRequired,
};

export default Album;
