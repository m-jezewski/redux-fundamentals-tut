import { Middleware } from 'redux';
import { AnyAction } from '../types/interfaces';

// example middleware functions from redux docs guide

export const loggerMiddleware: Middleware = (storeAPI) => (next) => (action: AnyAction) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

export const delayedMessageMiddleware: Middleware = (storeAPI) => (next) => (action: AnyAction) => {
  if (action.type === 'tasks/taskAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload);
    }, 1000);
  }

  return next(action);
};
