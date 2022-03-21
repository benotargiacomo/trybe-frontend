import fetchAPI from '../helpers/fetchAPI';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const LOADING = 'LOADING';

export const fetchCurrenciesAction = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  const exchangeRates = await fetchAPI();

  const payload = Object.values(exchangeRates).reduce((acc, crr) => {
    if (!crr.name.includes('Turismo')) acc.push(crr.code);
    return acc;
  }, []);

  dispatch({
    type: FETCH_CURRENCIES,
    payload,
  });
};

export const saveEmailInStateAction = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const addExpenseAction = (formData) => async (dispatch) => {
  const { value, currency, method, tag, description } = formData;
  const exchangeRates = await fetchAPI();

  const rate = exchangeRates[currency].ask;

  const payload = {
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  };

  dispatch({
    type: ADD_EXPENSE,
    payload,
    rate,
  });
};

export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
