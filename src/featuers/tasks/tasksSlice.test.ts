import { Task } from '../../types/interfaces';
import {
  taskAdded,
  taskAllCompleted,
  taskColorChanged,
  taskCompletedCleared,
  taskDeleted,
  taskToggled,
  tasksReducer,
} from './tasksSlice';

test('Adds new task to existing list', () => {
  const initialState = [{ id: 0, text: 'Test task 1', completed: false }];

  const result: Task[] = tasksReducer(initialState, taskAdded({ id: 1, completed: false, text: 'Test task 2' }));

  expect(result).toEqual([
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ]);
});

test('Adds new task to new list', () => {
  const initialState: Task[] = [];

  const result: Task[] = tasksReducer(initialState, taskAdded({ id: 0, completed: false, text: 'Test task 1' }));

  expect(result).toEqual([{ id: 0, text: 'Test task 1', completed: false }]);
});

test('Toggles completed status of task with given id', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, taskToggled(1));

  expect(result).toEqual([
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: true },
  ]);
});

test('Sets task color to passed value', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, taskColorChanged(0, 'Green'));

  expect(result).toEqual([
    { id: 0, text: 'Test task 1', completed: false, color: 'Green' },
    { id: 1, text: 'Test task 2', completed: false },
  ]);
});

test('Deletes task from array', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, taskDeleted(0));

  expect(result).toEqual([{ id: 1, text: 'Test task 2', completed: false }]);
});

test('Sets completed status to true for all tasks', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, taskAllCompleted());
  expect(result).toEqual([
    { id: 0, text: 'Test task 1', completed: true },
    { id: 1, text: 'Test task 2', completed: true },
  ]);
});

test('Removes all completed tasks', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: true },
    { id: 2, text: 'Test task 2', completed: false },
    { id: 3, text: 'Test task 2', completed: true },
  ];

  const result: Task[] = tasksReducer(initialState, taskCompletedCleared());

  expect(result).toEqual([
    { id: 0, text: 'Test task 1', completed: false },
    { id: 2, text: 'Test task 2', completed: false },
  ]);
});
