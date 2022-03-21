import React from 'react';
import PropTypes from 'prop-types';

class CategoriaFilter extends React.Component {
  render() {
    const { responseApi } = this.props;
    const resolve = responseApi.map((response) => {
      const { id, title, price, thumbnail } = response;
      return (
        <li data-testid="product" key={ id }>
          <h1>
            { title }
          </h1>
          <img src={ thumbnail } alt={ title } />
          <p>
            $
            { price }
          </p>
        </li>
      );
    });
    return (
      <ul>
        { resolve }
      </ul>
    );
  }
}
export default CategoriaFilter;
CategoriaFilter.propTypes = {
  responseApi: PropTypes.arrayOf(PropTypes.object).isRequired,
};
