import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ profile, title, search }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header>
      { profile
        ? (
          <Link to="/perfil">
            <div src={ profileIcon }>
              <img src={ profileIcon } alt="Perfil" data-testid="profile-top-btn" />
            </div>
          </Link>
        )
        : null }

      <span data-testid="page-title">{ title }</span>

      { search
        ? (
          <button
            type="button"
            onClick={ () => setSearchBar(!searchBar) }
          >
            <div src={ searchIcon }>
              <img src={ searchIcon } alt="Buscar" data-testid="search-top-btn" />
            </div>
          </button>
        )
        : null }

      { searchBar ? <SearchBar /> : null }
    </header>
  );
}

Header.propTypes = {
  profile: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]).isRequired,
  title: PropTypes.string.isRequired,
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]).isRequired,
};
