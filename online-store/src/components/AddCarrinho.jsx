import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCarrinho.css';

const CART_KEY = 'cart';

class AddCarrinho extends React.Component {
  //  https://github.com/tryber/sd-014-a-project-trybetunes/blob/gabriel-pinheiro-matiucci-project-trybetunes/src/services/favoriteSongsAPI.js

  addLocalStorage(produto) {
    //  console.log(produto);
    let savedCart = [];
    if (JSON.parse(localStorage.getItem(CART_KEY))) {
      savedCart = JSON.parse(localStorage.getItem(CART_KEY));
    }
    localStorage.setItem('cart', JSON.stringify([...savedCart, produto]));
  }

  render() {
    const { produto, testid } = this.props;

    return (
      <button
        type="button"
        className="bt-container"
        data-testid={ testid }
        onClick={ () => this.addLocalStorage(produto) }
      >
        Adicionar
      </button>
    );
  }
}

AddCarrinho.propTypes = {
  produto: PropTypes.objectOf(PropTypes.any).isRequired,
  testid: PropTypes.string.isRequired,
};

export default AddCarrinho;
