import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  render() {
    const { searchInput, handleChange, handleClick } = this.props;

    return (
      <form>
        <input
          type="text"
          value={ searchInput }
          placeholder="Nome do Artista"
          onChange={ handleChange }
          data-testid="search-artist-input"
        />
        <button
          type="button"
          disabled={ searchInput.length <= 1 }
          onClick={ handleClick }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchForm;
