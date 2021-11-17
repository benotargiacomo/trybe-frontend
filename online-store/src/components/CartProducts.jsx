import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';
import '../styles/CartCheckout.css';

class CartProducts extends React.Component {
  render() {
    const { carrinho, updateCart, updateTotal } = this.props;
    const cartList = carrinho.map((produto) => (
      <CartProduct
        updateCart={ updateCart }
        updateTotal={ updateTotal }
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

CartProducts.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCart: PropTypes.func.isRequired,
  updateTotal: PropTypes.func.isRequired,
};

export default CartProducts;
