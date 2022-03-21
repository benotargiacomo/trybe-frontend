import React from 'react';
import { Link } from 'react-router-dom';
import CartProducts from '../components/CartProducts';
import TotalPrice from '../components/TotalPrice';

const CART_KEY = 'cart';
const QTD_KEY = 'qtd';

class Carrinho extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
      total: 0,
    };
    this.mudaEstado = this.mudaEstado.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.loadTotal = this.loadTotal.bind(this);
  }

  componentDidMount() {
    this.handleUpdate();
    this.loadTotal();
  }

  handleUpdate() {
    const produtos = JSON.parse(localStorage.getItem(CART_KEY));
    if (produtos) {
      this.mudaEstado(produtos, 'carrinho');
    }
  }

  loadTotal() {
    const savedQuantity = JSON.parse(localStorage.getItem(QTD_KEY));
    const savedCart = JSON.parse(localStorage.getItem(CART_KEY));
    if (savedQuantity && savedCart) {
      let sums = 0;
      savedCart.forEach((item) => {
        const foundItem = savedQuantity.find((element) => element.id === item.id);
        sums += foundItem.quantity * item.price;
      });
      this.mudaEstado(sums, 'total');
    }
  }

  mudaEstado(value, key) {
    this.setState({ [key]: value });
  }

  render() {
    const { carrinho, total } = this.state;
    if (carrinho.length > 0) {
      return (
        <>
          <CartProducts
            updateCart={ this.handleUpdate }
            carrinho={ carrinho }
            updateTotal={ this.loadTotal }
          />
          <TotalPrice total={ total } />
          <Link to="/checkout">
            <button
              type="button"
              className="bt-container"
              data-testid="checkout-products"
            >
              Checkout
            </button>
          </Link>
        </>
      );
    }
    return (
      <section>
        <section>
          <h1
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h1>
        </section>
      </section>
    );
  }
}

export default Carrinho;
