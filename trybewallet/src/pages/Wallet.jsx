import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import iconLogo from '../assests/icons/icon-logo.svg';
import '../styles/wallet.scss';

class Wallet extends Component {
  render() {
    const { userEmail, walletExpenses } = this.props;

    const updatedTotal = walletExpenses
      .reduce((acc, { value, currency, exchangeRates }) => {
        const rate = exchangeRates[currency].ask;
        const expenses = acc + (1 * value) * (1 * rate);
        return expenses;
      }, 0);

    return (
      <>
        <header className="main-header">
          <div className="logo-container">
            <img src={ iconLogo } alt="TrybeWallet" />
            <span>TrybeWallet</span>
          </div>
          <div className="user-info">
            <p data-testid="email-field">{ userEmail }</p>
            <div className="total-container">
              <span className="total">Total</span>
              <span data-testid="total-field">
                {` R$ ${updatedTotal.toFixed(2)} ` }
              </span>
              <i data-testid="header-currency-field">BRL</i>
            </div>
          </div>
        </header>
        <main>
          <AddExpenseForm handleChange={ this.handleChange } />
          <ExpenseTable />
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,

});

export default connect(mapStateToProps, null)(Wallet);
