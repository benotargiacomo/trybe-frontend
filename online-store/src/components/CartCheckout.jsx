import React from 'react';
import ProductCheckout from './ProductCheckout';
import '../styles/CartCheckout.css';

const CART_KEY = 'cart';

class CartCheckout extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
    };
    this.mudaEstado = this.mudaEstado.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate() {
    const produtos = JSON.parse(localStorage.getItem(CART_KEY));
    if (produtos) {
      //  console.log(produtos);
      this.mudaEstado(produtos);
    }
  }

  mudaEstado(produtos) {
    this.setState({ carrinho: produtos });
  }

  render() {
    const { carrinho } = this.state;
    const cartList = carrinho.map((produto) => (
      <ProductCheckout
        key={ produto.id }
        produto={ produto }
      />
    ));

    return (
      <section className="container-products">
        { cartList }
      </section>
    );
  }
}

export default CartCheckout;
