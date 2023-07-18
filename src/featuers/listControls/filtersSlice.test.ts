import { filterStatus, taskColor } from '../../types/interfaces';
import { filtersReducer } from './filtersSlice';

test('Updates status filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, { type: 'filters/statusFilterUpdated', payload: 'Completed' });
  expect(result.status).toEqual('Completed');
  expect(result.colors).toEqual(initialState.colors);
});

test('Adds color to colors filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, {
    type: 'filters/colorFilterUpdated',
    payload: { changeType: 'added', color: 'Blue' },
  });
  expect(result.colors).toContain('Blue');
  expect(result.colors).toHaveLength(initialState.colors.length + 1);
  expect(result.status).toEqual(initialState.status);
});

test('Adds color to colors filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, {
    type: 'filters/colorFilterUpdated',
    payload: { changeType: 'added', color: 'Blue' },
  });

  expect(result.colors).toContain('Blue');
  expect(result.colors).toHaveLength(initialState.colors.length + 1);
  expect(result.status).toEqual(initialState.status);
});

test('Removes color from colors filter', () => {
  const initialState: { status: filterStatus; colors: taskColor[] } = {
    status: 'All',
    colors: ['Red', 'Green', 'Purple'],
  };

  const result = filtersReducer(initialState, {
    type: 'filters/colorFilterUpdated',
    payload: { changeType: 'removed', color: 'Red' },
  });

  expect(result.colors).not.toContain('Red');
  expect(result.colors).toHaveLength(initialState.colors.length - 1);
  expect(result.status).toEqual(initialState.status);
});
