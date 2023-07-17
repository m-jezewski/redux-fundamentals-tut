import { createStore, compose, applyMiddleware } from 'redux';
import { StoreEnhancer } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { includeMeaningOfLife, sayHiOnDispatch } from './exampleAddons/enhancers';
import { delayedMessageMiddleware, loggerMiddleware } from './exampleAddons/middleware';

//  Enhancers
//const composedEnhancer: StoreEnhancer<unknown, object> = compose(sayHiOnDispatch, includeMeaningOfLife);
//export const store = createStore(rootReducer, {}, composedEnhancer);

// Middleware
const middlewareEnhancer = applyMiddleware(loggerMiddleware, delayedMessageMiddleware);

export const store = createStore(rootReducer, middlewareEnhancer);
