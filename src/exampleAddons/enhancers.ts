import { StoreEnhancer, createStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducer';
import { AnyAction, AppState } from '../types/interfaces';
// example store enhancers from redux docs guide

export const sayHiOnDispatch = (createS: typeof createStore) => {
  return (
    reducer: typeof rootReducer,
    preloadedState: AppState,
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
    preloadedState: AppState,
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
