import { FETCH_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, { type, payload, rate }) {
  switch (type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length, ...payload,
      }],
      total: state.total + 1 * (payload.value * rate),
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: payload.updatedExpenses,
      total: payload.updatedTotal,
    };
  default:
    return state;
  }
}

export default wallet;
