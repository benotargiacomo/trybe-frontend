import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CurrencyInput extends Component {
  render() {
    const { currency, exchangeRates, handleChange } = this.props;
    const currencies = Object.values(exchangeRates).reduce((acc, crr) => {
      if (!crr.name.includes('Turismo')) acc.push(crr.code);
      return acc;
    }, []);

    // console.log(`${currencies}`);

    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ handleChange }
        >
          <option value="" disabled hidden>Moeda</option>
          { currencies.map((currencyCode, i) => (
            <option key={ i } value={ currencyCode }>{currencyCode}</option>
          )) }
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default CurrencyInput;
