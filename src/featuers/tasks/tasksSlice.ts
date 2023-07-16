import type { Task } from '../../types/interfaces';
import { TasksActions } from './actionTypes';

const nextTodoId = (tasks: Task[]) => {
  const maxId = tasks.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const initialState: Task[] = [];

export const tasksReducer = (state = initialState, action: TasksActions) => {
  switch (action.type) {
    case 'tasks/taskAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
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

    default:
      return state;
  }
};
