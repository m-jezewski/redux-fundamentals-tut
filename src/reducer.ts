import { tasksReducer } from './featuers/tasks/tasksSlice';
import { filtersReducer } from './featuers/filters/filtersSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
