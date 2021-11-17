import React, { Component } from 'react';
import ArtistList from '../components/ArtistList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import SearchForm from '../components/SearchForm';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      artist: '',
      loading: false,
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchAlbums = this.fetchAlbums.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      searchInput: value,
    });
  }

  handleClick() {
    const { searchInput } = this.state;
    this.setState({
      loading: true,
      artist: searchInput,
    }, () => {
      this.fetchAlbums();
    });
  }

  async fetchAlbums() {
    const { artist } = this.state;
    const data = await searchAlbumsAPI(artist);
    this.setState({
      searchInput: '',
      data,
    }, () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { searchInput, loading, artist, data } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <SearchForm
            searchInput={ searchInput }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
        )}
        {artist ? (
          <h1>
            { `Resultado de álbuns de: ${artist}` }
          </h1>
        ) : null}
        <ArtistList data={ data } />
      </div>
    );
  }
}

export default Search;
