import { client } from '../../fakeApi/client';
import { RootState } from '../../store';
import type { AppState, Task, taskColor } from '../../types/interfaces';
import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(tasks, action: PayloadAction<Task>) {
      tasks.push(action.payload);
    },
    taskToggled(tasks, action) {
      const task = tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task?.completed;
      }
    },
    taskColorChanged: {
      reducer(tasks, action: PayloadAction<{ id: number; color: taskColor }>) {
        const task = tasks.find((task) => task.id === action.payload.id);
        if (task) task.color = action.payload.color;
      },
      prepare(id: number, color: taskColor) {
        return {
          payload: { id, color },
        };
      },
    },
    taskDeleted(tasks, action: PayloadAction<number>) {
      return tasks.filter((task) => task.id !== action.payload);
    },
    taskAllCompleted(tasks) {
      tasks.forEach((task) => (task.completed = true));
    },
    taskCompletedCleared(tasks) {
      return tasks.filter((task) => task.completed !== true);
    },
    tasksAllLoaded(tasks, action: PayloadAction<Task[]>) {
      return (tasks = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (tasks, action) => {
        return action.payload;
      })
      .addCase(saveNewTask.fulfilled, (tasks, action) => {
        tasks.push(action.payload);
      });
  },
});

// Thunks

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await client.get<{ todos: Task[] }>('/fakeApi/todos');
  return response.todos;
});

export const saveNewTask = createAsyncThunk('tasks/saveNewTask', async (text: string) => {
  const initialTask = { text };
  const response = await client.post('/fakeApi/todos', { todo: initialTask });
  return response.todo as Task;
});

export const tasksReducer = tasksSlice.reducer;

export const {
  taskAdded,
  taskToggled,
  taskColorChanged,
  taskDeleted,
  taskAllCompleted,
  taskCompletedCleared,
  tasksAllLoaded,
} = tasksSlice.actions;

// Selector

export const selectFitleredTaskIds = createSelector(
  (state: RootState) => state.tasks,
  (state: RootState) => state.filters,
  (tasks, filters) => {
    const { status, colors } = filters;
    const colorFiltered =
      colors.length === 0 ? tasks : tasks.filter((task) => task.color && colors.includes(task.color));

    const statusFiltered = tasks.filter((task) => {
      if (status === 'All') return true;
      if (status === 'Active') return !task.completed;
      if (status === 'Completed') return task.completed;
    });

    return colorFiltered.filter((task) => statusFiltered.includes(task)).map((task) => task.id);
  },
);
