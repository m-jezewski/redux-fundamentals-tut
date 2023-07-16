import type { filterStatus, taskColor } from '../../types/interfaces';
import type { FiltersActions } from './actionTypes';

const initialState: { status: filterStatus; colors: taskColor[] } = {
  status: 'All',
  colors: [],
};

export const filtersReducer = (state = initialState, { type, payload }: FiltersActions) => {
  switch (type) {
    case 'filters/statusFilterUpdated': {
      return {
        ...state,
        status: payload,
      };
    }
    case 'filters/colorFilterUpdated': {
      switch (payload.changeType) {
        case 'added':
          if (state.colors.includes(payload.color)) return state;

          return {
            ...state,
            colors: [...state.colors, payload.color],
          };
        case 'removed':
          return {
            ...state,
            colors: state.colors.filter((color) => color !== payload.color),
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
};
