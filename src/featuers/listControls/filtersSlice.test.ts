import { filterStatus, taskColor } from '../../types/interfaces';
import { filtersColorFilterUpdated, filtersReducer, filtersStatusUpdated } from './filtersSlice';

test('Updates status filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, filtersStatusUpdated('Completed'));
  expect(result).toEqual({
    status: 'Completed',
    colors: ['Red', 'Green', 'Purple'],
  });
});

test('Adds color to colors filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, filtersColorFilterUpdated('Blue', 'add'));

  expect(result).toEqual({
    status: 'All',
    colors: ['Red', 'Green', 'Purple', 'Blue'],
  });
});

test('Removes color from colors filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, filtersColorFilterUpdated('Red', 'remove'));

  expect(result).toEqual({
    status: 'All',
    colors: ['Green', 'Purple'],
  });
});
