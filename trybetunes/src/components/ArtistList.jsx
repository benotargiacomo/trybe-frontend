import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ArtistList extends Component {
  render() {
    const { data } = this.props;
    const artistList = data.map((e) => (
      <Link
        to={ `/album/${e.collectionId}` }
        key={ e.collectionId }
        data-testid={ `link-to-album-${e.collectionId}` }
      >
        <li>
          {e.collectionName}
        </li>
      </Link>
    ));

    if (data.length === 0) return <span>Nenhum álbum foi encontrado</span>;

    return <ul>{artistList}</ul>;
  }
}

ArtistList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtistList;
