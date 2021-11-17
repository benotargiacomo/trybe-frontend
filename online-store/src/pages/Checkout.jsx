import React from 'react';
import CartCheckout from '../components/CartCheckout';
import InfoComprador from '../components/InfoComprador';
import MetodoPagamento from '../components/MetodoPagamento';
import TotalPrice from '../components/TotalPrice';

const CART_KEY = 'cart';
const QTD_KEY = 'qtd';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    const savedQuantity = JSON.parse(localStorage.getItem(QTD_KEY));
    const savedCart = JSON.parse(localStorage.getItem(CART_KEY));
    let sums = 0;
    savedCart.forEach((item) => {
      const foundItem = savedQuantity.find((element) => element.id === item.id);
      sums += foundItem.quantity * item.price;
    });
    this.mudaEstado(sums, 'total');
  }

  mudaEstado(value, key) {
    this.setState({ [key]: value });
  }

  render() {
    const { total } = this.state;
    return (
      <main>
        <CartCheckout />
        <TotalPrice total={ total } />
        <br />
        <br />
        <InfoComprador />
        <br />
        <br />
        <MetodoPagamento />
      </main>
    );
  }
}

export default Checkout;
