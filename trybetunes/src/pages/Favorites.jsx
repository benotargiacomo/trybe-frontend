import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchFavorites();
  }

  async fetchFavorites() {
    try {
      const favorites = await getFavoriteSongs();
      this.setState({
        favorites,
      }, () => {
        this.setState({ loading: false });
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { favorites, loading } = this.state;

    if (loading) {
      return (
        <div data-testid="page-favorites">
          <Header />
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="page-favorites">
        <Header />
        <MusicCard tracks={ favorites } />
      </div>
    );
  }
}

export default Favorites;
