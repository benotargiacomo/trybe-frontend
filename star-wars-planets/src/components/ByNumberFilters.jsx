import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

export default function ByNumberFilters() {
  const { filter } = useContext(PlanetsContext);
  const { filters: { filterByNumericValues } } = filter;

  const removeFilter = (event) => {
    event.preventDefault();

    const { asdf } = event;
    console.log(asdf);
  };

  return (
    <div>
      { filterByNumericValues
        ? filterByNumericValues.map(({ column, comparison, value }, i) => (
          <button
            key={ i }
            type="button"
            onClick={ removeFilter }
          >
            { `${column} ${comparison} ${value} x` }
          </button>
        ))
        : null}
    </div>
  );
}
