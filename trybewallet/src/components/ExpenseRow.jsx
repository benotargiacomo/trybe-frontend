import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import EditButton from './EditButton';
import RemoveButton from './RemoveButton';

class ExpenseRow extends Component {
  render() {
    const { expenseData } = this.props;
    const { id, value, currency, method, tag, description, exchangeRates } = expenseData;
    const { name, ask } = exchangeRates[currency];
    const convertedValue = value * ask;

    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{(1 * ask).toFixed(2)}</td>
        <td>{name.split('/')[0]}</td>
        <td>{(convertedValue).toFixed(2)}</td>
        <td>Real</td>
        <td>
          {/* <EditButton id={ id } /> */}
          <RemoveButton id={ id } convertedValue={ convertedValue } />
        </td>
      </tr>
    );
  }
}

ExpenseRow.propTypes = {
  expenseData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
};

export default ExpenseRow;
