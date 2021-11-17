export const BYNAME = 'BYNAME';
export const BYNUMBER = 'BYNUMBER';
export const SORT = 'SORT';
export const RESET = 'RESET';

export const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    sort: {
      column: '',
      sort: '',
    },
  },
};

export const updateFilter = (state, { type, payload }) => {
  switch (type) {
  case BYNAME:
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByName: {
          name: payload,
        },
      },
    };
  case BYNUMBER:
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByNumericValues: [...state.filters.filterByNumericValues, payload],
      },
    };
  case SORT:
    return {
      ...state,
      filters: {
        ...state.filters,
        sort: {
          column: payload.column,
          sort: state.filters.sort.sort === 'ASC' ? 'DESC' : 'ASC',
        },
      },
    };
  // case RESET:
  //   return {
  //     ...state,
  //     filters: {
  //       ...state.filters,
  //     }
  //   };
  default:
    return state;
  }
};
