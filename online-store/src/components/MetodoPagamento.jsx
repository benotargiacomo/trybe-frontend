import React, { Component } from 'react';

class MetodoPagamento extends Component {
  render() {
    return (
      <fieldset>
        <legend>Método de Pagamento</legend>
        <label htmlFor="boleto">
          Boleto
          <input type="radio" name="metodo-pagamento" id="boleto" />
        </label>
        <label htmlFor="credito">
          Crédito
          <input type="radio" name="metodo-pagamento" id="credito" />
        </label>
        <label htmlFor="mastercard">
          Mastercard
          <input type="radio" name="metodo-pagamento" id="mastercard" />
        </label>
        <label htmlFor="elo">
          Elo
          <input type="radio" name="metodo-pagamento" id="elo" />
        </label>
      </fieldset>
    );
  }
}

export default MetodoPagamento;
