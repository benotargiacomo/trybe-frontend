import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Produto from './Produto';
import '../styles/Produto.css';

class Produtos extends Component {
  render() {
    const { products } = this.props;
    const productsList = products.map((produto) => (
      <Produto
        key={ produto.id }
        produto={ produto }
      />
    ));
    return (
      <ul className="produto-wrapper">
        { productsList }
      </ul>
    );
  }
}

Produtos.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Produtos;
