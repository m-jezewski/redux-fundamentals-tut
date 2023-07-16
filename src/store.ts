import { createStore, compose } from 'redux';
import { StoreEnhancer } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { includeMeaningOfLife, sayHiOnDispatch } from './exampleAddons/enhancers';

const composedEnhancer: StoreEnhancer<unknown, object> = compose(sayHiOnDispatch, includeMeaningOfLife);

export const store = createStore(rootReducer, {}, composedEnhancer);
