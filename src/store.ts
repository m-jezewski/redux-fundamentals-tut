import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './featuers/tasks/tasksSlice';
import { filtersReducer } from './featuers/listControls/filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
