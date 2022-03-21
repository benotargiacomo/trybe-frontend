import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCarrinho.css';

const QTD_KEY = 'qtd';

class ProductCheckout extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  componentDidMount() {
    const { produto } = this.props;
    const savedQuantity = JSON.parse(localStorage.getItem(QTD_KEY));
    const item = savedQuantity.find((element) => element.id === produto.id);
    this.updateState(item);
  }

  updateState(item) {
    this.setState({ quantity: item.quantity });
  }

  render() {
    const { produto } = this.props;
    const { title, price, thumbnail } = produto;
    const { quantity } = this.state;

    return (
      <li className="produto-container">
        <div className="image-container">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="text-container">
          <h2 className="price">
            { `R$  ${price}` }
          </h2>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <br />
          <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
          <h3>Unidade(s)</h3>
        </div>
      </li>
    );
  }
}

ProductCheckout.propTypes = {
  produto: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
};

export default ProductCheckout;
