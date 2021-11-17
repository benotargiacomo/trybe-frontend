import { LOGIN_EMAIL, LOADING } from '../actions';

const INITIAL_STATE = {
  email: '',
  loading: false,
  method: ['Dinheiro', 'Cartão de débito', 'Cartão de crédito'],
  tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case LOADING:
    return {
      ...state,
      loading: !state.loading,
    };
  case LOGIN_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default user;
