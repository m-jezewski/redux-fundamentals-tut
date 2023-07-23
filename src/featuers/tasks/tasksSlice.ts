import { Dispatch } from 'react';
import { client } from '../../fakeApi/client';
import type { Task } from '../../types/interfaces';
import { ActionAdd, ActionLoadTasks, TasksActions } from './actionTypes';

const initialState: Task[] = [];

export const tasksReducer = (state = initialState, action: TasksActions) => {
  switch (action.type) {
    case 'tasks/taskAdded': {
      return [...state, action.payload];
    }
    case 'tasks/taskToggled': {
      return state.map((task) => {
        if (task.id !== action.payload) return task;
        return {
          ...task,
          completed: !task.completed,
        };
      });
    }
    case 'tasks/colorSelected': {
      return state.map((task) => {
        if (task.id !== action.payload.taskId) return task;
        return {
          ...task,
          color: action.payload.color,
        };
      });
    }
    case 'tasks/taskDelted': {
      return state.filter((task) => task.id !== action.payload);
    }
    case 'tasks/allCompleted': {
      return state.map((task) => ({
        ...task,
        completed: true,
      }));
    }
    case 'tasks/completedCleared': {
      return state.filter((task) => task.completed !== true);
    }
    case 'tasks/allLoaded': {
      return action.payload;
    }

    default:
      return state;
  }
};

// Thunks

export const fetchTasks = async (dispatch: Dispatch<ActionLoadTasks>, getState: () => Task[]) => {
  try {
    const response = await client.get<{ todos: Task[] }>('/fakeApi/todos');
    dispatch({ type: 'tasks/allLoaded', payload: response.todos });
  } catch (err) {
    console.log(String(err));
  }
};

export const saveNewTask = (text: string) => {
  return async (dispatch: Dispatch<ActionAdd>, getState: () => Task[]) => {
    const initialTask = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTask });
    dispatch({ type: 'tasks/taskAdded', payload: response.todo });
  };
};
