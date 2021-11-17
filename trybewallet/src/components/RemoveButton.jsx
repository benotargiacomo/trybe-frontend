import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpenseAction } from '../actions';

class RemoveButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const { id, walletExpenses, removeExpense, walletTotal, convertedValue } = this.props;
    const updatedExpenses = walletExpenses.filter((expense) => expense.id !== id);
    const updatedTotal = walletTotal - convertedValue;
    const payload = {
      updatedExpenses,
      updatedTotal,
    };

    removeExpense(payload);
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
        data-testid="delete-btn"
      >
        Remover
      </button>
    );
  }
}

RemoveButton.propTypes = {
  convertedValue: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  removeExpense: PropTypes.func.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  walletTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  walletExpenses: state.wallet.expenses,
  walletTotal: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenses) => dispatch(removeExpenseAction(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
