import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Categorias.css';
import * as api from '../services/api';

class Categorias extends React.Component {
  constructor() {
    super();
    this.state = {
      find: '',
      response: '',
    };
    this.findCategory = this.findCategory.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  async findCategory({ target }) {
    this.setState({
      find: target.textContent,
    }, async () => {
      const { find } = this.state;
      const resolve = await api.getProductsFromCategoryAndQuery(find);
      this.setState({
        response: resolve.results,
      }, () => this.updateProducts());
    });
  }

  updateProducts() {
    const { response } = this.state;
    const { metodo } = this.props;
    metodo(response);
  }

  render() {
    const { responseApi } = this.props;

    const categorias = responseApi.map((categoria) => {
      const { id, name } = categoria;
      return (
        <button
          data-testid="category"
          onClick={ this.findCategory }
          id={ id }
          key={ id }
          type="button"
        >
          <p className="categorias">{ name }</p>
        </button>
      );
    });

    //  ;

    return (
      <div className="side-container">
        <h2>Categorias</h2>
        <ul className="categorias-container">
          { categorias }
        </ul>
      </div>
    );
  }
}

Categorias.propTypes = {
  responseApi: PropTypes.arrayOf(PropTypes.object).isRequired,
  metodo: PropTypes.func.isRequired,
};

export default Categorias;
