import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { INITIAL_FILTER, updateFilter } from './useReducerAndActions';
import PlanetsContext from './PlanetsContext';
import { numberColumnOpt } from '../helper/optionsAndColumns';

export default function PlanetsProvider({ children }) {
  const { data, loading } = useFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const [numColumnOpt, setNumColumnOpt] = useState(numberColumnOpt);
  const [filteredData, setFilteredData] = useState([]);

  const [filter, dispatch] = useReducer(updateFilter, INITIAL_FILTER);

  // FUNÇÕES DE FILTRO
  const filterByName = (name) => {
    if (name) {
      const filteredByName = filteredData.filter((planet) => planet.name
        .toLowerCase().includes(name.toLowerCase()));

      setFilteredData(filteredByName);
      console.log('filterByName render');
    }
  };

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filter;
    const { filters: { filterByNumericValues } } = filter;

    setFilteredData(data);

    // FILTRO DE NOME
    filterByName(name);

    // FILTRO DE NÚMERO
    if (filterByNumericValues.length === 1) {
      const { column, comparison, value } = filterByNumericValues[0];

      setNumColumnOpt(numColumnOpt.filter((opt) => opt !== column));

      const numericFilter = data.filter((planet) => {
        if (comparison === 'maior que') return (1 * planet[column]) > (1 * value);
        if (comparison === 'igual a') return (1 * planet[column]) === (1 * value);
        if (comparison === 'menor que') return (1 * planet[column]) < (1 * value);

        return null;
      });

      setFilteredData(numericFilter);
      console.log('filterByNumber render');
    }

    // if (filterByNumericValues.length > 1) {
    //   console.log('filterByNumber 2+ render');

    //   filterByNumericValues.forEach((filter) => {
    //     const { column, comparison, value } = filter;

    //     setNumColumnOpt(numColumnOpt.filter((opt) => opt !== column));
    //   });
    // }
  }, [data, filter]);

  const providerContext = { filteredData, filter, loading, numColumnOpt, dispatch };

  return (
    <PlanetsContext.Provider value={ providerContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
