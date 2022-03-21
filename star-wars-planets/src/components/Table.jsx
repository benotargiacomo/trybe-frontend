import React, { useContext } from 'react';
import { SORT } from '../contexts/useReducerAndActions';
import PlanetsContext from '../contexts/PlanetsContext';
import { tableColumns } from '../helper/optionsAndColumns';

export default function Table() {
  const { loading, filteredData, dispatch } = useContext(PlanetsContext);

  const columnFilter = ({ target }) => {
    const { innerHTML } = target;
    const column = innerHTML.toLowerCase().replace(/ /g, '_');

    const payload = { column, sort: 'ASC' };

    dispatch({ type: SORT, payload });
  };

  return loading
    ? <span>Loading...</span>
    : (
      <table>
        <thead>
          <tr>
            { tableColumns.map((col, i) => (
              <th
                style={ { cursor: 'pointer' } }
                key={ i }
                onClick={ columnFilter }
              >
                { col }
              </th>
            )) }
          </tr>
        </thead>
        <tbody>
          { filteredData.map((planet, i) => (
            <tr key={ i }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
