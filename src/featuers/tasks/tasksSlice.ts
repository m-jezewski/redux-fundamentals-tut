import { client } from '../../fakeApi/client';
import type { Task, taskColor } from '../../types/interfaces';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
