import { createStore, compose, applyMiddleware } from 'redux';
import { StoreEnhancer } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { includeMeaningOfLife, sayHiOnDispatch } from './exampleAddons/enhancers';
import { delayedMessageMiddleware, loggerMiddleware } from './exampleAddons/middleware';
import thunkMiddleware from 'redux-thunk';

//  Enhancers from previous steps
//const composedEnhancer: StoreEnhancer<unknown, object> = compose(sayHiOnDispatch, includeMeaningOfLife);
//export const store = createStore(rootReducer, {}, composedEnhancer);

// Middleware from previous steps
// const middlewareEnhancer = applyMiddleware(loggerMiddleware, delayedMessageMiddleware);

// export const store = createStore(rootReducer, middlewareEnhancer);

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composedEnhancer);
