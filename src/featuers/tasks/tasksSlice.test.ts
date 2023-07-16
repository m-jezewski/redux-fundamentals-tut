import { Task } from '../../types/interfaces';
import { tasksReducer } from './tasksSlice';

test('Adds new task to list', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, { type: 'tasks/taskAdded', payload: 'Test task 3' });

  expect(result).toContainEqual({ id: 2, text: 'Test task 3', completed: false });
  expect(result).toHaveLength(3);
});

test('Toggles completed status of task with given id', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, { type: 'tasks/taskToggled', payload: 1 });

  expect(result).toContainEqual({ ...initialState[1], completed: true });
});

test('Sets task color to passed value', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, {
    type: 'tasks/colorSelected',
    payload: { taskId: 0, color: 'Green' },
  });

  expect(result).toContainEqual({ ...initialState[0], color: 'Green' });
});

test('Deletes task from array', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, { type: 'tasks/taskDelted', payload: 0 });

  expect(result).toHaveLength(1);
  expect(result).toContainEqual(initialState[1]);
  expect(result).not.toContainEqual(initialState[0]);
});

test('Sets completed status to true for all tasks', () => {
  const initialState = [
    { id: 0, text: 'Test task 1', completed: false },
    { id: 1, text: 'Test task 2', completed: false },
  ];

  const result: Task[] = tasksReducer(initialState, { type: 'tasks/allCompleted' });
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

  const result: Task[] = tasksReducer(initialState, { type: 'tasks/completedCleared' });

  expect(result).toHaveLength(2);
  expect(result).not.toContainEqual(initialState[1]);
  expect(result).toContainEqual(initialState[0]);
});
