import React, { useContext } from 'react';
import { BYNAME } from '../contexts/useReducerAndActions';
import PlanetsContext from '../contexts/PlanetsContext';

export default function FilterByName() {
  const { filter, dispatch } = useContext(PlanetsContext);
  const { filters: { filterByName: { name } } } = filter;

  return (
    <input
      type="text"
      value={ name }
      onChange={ (e) => dispatch({ type: BYNAME, payload: e.target.value }) }
      data-testid="name-filter"
    />
  );
}
