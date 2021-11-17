import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCarrinho.css';

const QTD_KEY = 'qtd';

class CartProduct extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
    this.deleteItemCart = this.deleteItemCart.bind(this);
  }

  componentDidMount() {
    const { quantity } = this.state;
    const { produto } = this.props;
    let savedQuantity = [];
    const qtdProduct = {
      id: produto.id,
      quantity,
    };
    if (JSON.parse(localStorage.getItem(QTD_KEY))) {
      savedQuantity = JSON.parse(localStorage.getItem(QTD_KEY));
      const item = savedQuantity.find((element) => element.id === produto.id);
      if (item) this.updateState(item);
    }
    if (!savedQuantity.some((item) => item.id === qtdProduct.id)) {
      localStorage.setItem(QTD_KEY, JSON.stringify([...savedQuantity, qtdProduct]));
    }
  }

  updateState(item) {
    this.setState({ quantity: item.quantity });
  }

  changeQuantity(operacao) {
    const { quantity } = this.state;
    if (operacao === '+') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), () => this.updateQuantityStorage());
    }
    if (operacao === '-' && quantity >= 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => this.updateQuantityStorage());
    }
  }

  updateQuantityStorage() {
    const { quantity } = this.state;
    const { produto, updateTotal } = this.props;
    const savedQuantity = JSON.parse(localStorage.getItem(QTD_KEY));
    const item = savedQuantity.find((element) => element.id === produto.id);
    const index = savedQuantity.indexOf(item);
    savedQuantity[index] = {
      id: produto.id,
      quantity,
    };
    localStorage.setItem(QTD_KEY, JSON.stringify(savedQuantity));
    updateTotal();
  }

  deleteItemCart() {
    const { produto, updateCart, updateTotal } = this.props;
    const storage = JSON.parse(localStorage.getItem('cart'));
    const produtoId = (storage.find((each) => each.id === produto.id));
    const index = storage.indexOf(produtoId);
    storage.splice(index, 1);
    this.setState({ quantity: 0 });
    this.deleteItemStorage();
    localStorage.setItem('cart', JSON.stringify(storage));
    updateCart();
    updateTotal();
  }

  deleteItemStorage() {
    const { produto, updateTotal } = this.props;
    const savedQuantity = JSON.parse(localStorage.getItem(QTD_KEY));
    const item = savedQuantity.find((element) => element.id === produto.id);
    const index = savedQuantity.indexOf(item);
    savedQuantity.splice(index, 1);
    localStorage.setItem(QTD_KEY, JSON.stringify(savedQuantity));
    updateTotal();
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
          <div className="btn-container-cart">
            <button
              className="bt-container"
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.changeQuantity('+') }
            >
              +
            </button>
            <button
              className="bt-container"
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.changeQuantity('-') }
            >
              -
            </button>
            <button
              className="bt-container"
              type="button"
              onClick={ this.deleteItemCart }
            >
              x
            </button>
          </div>
        </div>
      </li>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
  updateCart: PropTypes.func.isRequired,
  updateTotal: PropTypes.func.isRequired,
};

export default CartProduct;
