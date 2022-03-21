import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseRow from './ExpenseRow';

class ExpenseTable extends Component {
  render() {
    const { walletExpenses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { walletExpenses.map((expense, i) => (
            <ExpenseRow expenseData={ expense } key={ i } />
          ))}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  walletExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  walletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
