import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import INITIAL_STATE from '../helpers/initialFormState';
import fetchAPI from '../helpers/fetchAPI';
import { addExpenseAction } from '../actions';
import MethodInput from './MethodInput';
import TagInput from './TagInput';
import CurrencyInput from './CurrencyInput';
import '../styles/addform.scss';

class AddExpenseForm extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetchAPI().then((exchangeRates) => this.setState({ exchangeRates }));
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    // this.setState(INITIAL_STATE);

    const { addExpense } = this.props;
    addExpense(this.state);
  }

  render() {
    const { value, currency, method, tag, description, exchangeRates } = this.state;

    return (
      <form className="add-form">
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <CurrencyInput
          currency={ currency }
          exchangeRates={ exchangeRates }
          handleChange={ this.handleChange }
        />
        <MethodInput method={ method } handleChange={ this.handleChange } />
        <TagInput tag={ tag } handleChange={ this.handleChange } />
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          // disabled={ !isValid }
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

AddExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (localState) => dispatch(addExpenseAction(localState)),
});

export default connect(null, mapDispatchToProps)(AddExpenseForm);
