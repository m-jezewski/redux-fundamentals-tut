import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { filterStatus, taskColor } from '../../types/interfaces';

const initialState: { status: filterStatus; colors: taskColor[] } = {
  status: 'All',
  colors: [],
};

const fitlersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersStatusUpdated(state, action: PayloadAction<filterStatus>) {
      state.status = action.payload;
    },
    filtersColorFilterUpdated: {
      prepare(color: taskColor, changeType: 'add' | 'remove') {
        return {
          payload: { color, changeType },
        };
      },
      reducer(state, action: PayloadAction<{ color: taskColor; changeType: 'add' | 'remove' }>) {
        const { color, changeType } = action.payload;
        if (changeType == 'add') {
          state.colors.push(color);
        } else {
          state.colors = state.colors.filter((taskColor) => taskColor !== color);
        }
      },
    },
  },
});

export const filtersReducer = fitlersSlice.reducer;

export const { filtersStatusUpdated, filtersColorFilterUpdated } = fitlersSlice.actions;
