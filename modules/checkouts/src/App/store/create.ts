
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as formReducer } from 'redux-form';

import { reducer, name } from './slice';


const rootReducer = combineReducers({
  form: formReducer,
  [name]: reducer,
});


export function setupStore(preloadedState?: PreloadedState<TRootState>) {
  return configureStore({
    reducer: rootReducer,
  });
}

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
