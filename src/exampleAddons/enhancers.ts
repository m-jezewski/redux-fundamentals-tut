import { StoreEnhancer, createStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducer';
import { AnyAction, filterStatus, taskColor } from '../types/interfaces';
import { TasksActions } from '../featuers/tasks/actionTypes';
import { FiltersActions } from '../featuers/filters/actionTypes';

interface InitialState {
  tasks?: { id: number; text: string; completed: boolean; color?: taskColor | undefined }[] | undefined;
  filters?: { status: filterStatus; colors: taskColor[] } | undefined;
}

// example store enhancers from redux docs guide

export const sayHiOnDispatch = (createS: typeof createStore) => {
  return (
    reducer: typeof rootReducer,
    preloadedState: InitialState,
    enhancers: StoreEnhancer<unknown, object> | undefined,
  ) => {
    const store = createS(reducer, preloadedState, enhancers);

    function newDispatch(action: AnyAction) {
      const result = store.dispatch(action);
      console.log('Hi!');
      return result;
    }

    return { ...store, dispatch: newDispatch };
  };
};

export const includeMeaningOfLife = (createS: typeof createStore) => {
  return (
    reducer: typeof rootReducer,
    preloadedState: InitialState,
    enhancers: StoreEnhancer<unknown, object> | undefined,
  ) => {
    const store = createS(reducer, preloadedState, enhancers);

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      };
    }

    return { ...store, getState: newGetState };
  };
};
