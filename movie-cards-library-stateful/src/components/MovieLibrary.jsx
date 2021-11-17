import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    this.setState({ [name]: updatedValue });
  }

  onSearchTextChange(event) {
    this.handleChange(event);
    const { movies } = this.props;

    this.setState((state) => ({
      movies: !state.searchText
        ? movies
        : movies.filter((movie) => movie.title.toLowerCase()
          .includes(state.searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(state.searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(state.searchText.toLowerCase())),
    }));
  }

  onBookmarkedChange(event) {
    this.handleChange(event);
    const { movies } = this.props;

    this.setState((state) => ({
      movies: state.bookmarkedOnly
        ? movies.filter((movie) => movie.bookmarked)
        : movies,
    }));
  }

  onSelectedGenreChange(event) {
    this.handleChange(event);
    const { movies } = this.props;

    this.setState((state) => ({
      movies: !state.selectedGenre
        ? movies
        : movies.filter((movie) => movie.genre.includes(state.selectedGenre)),
    }));
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
        />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
