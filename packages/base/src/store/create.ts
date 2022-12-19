
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer, name } from './slice';


const rootReducer = combineReducers({
  [name]: reducer,
});


export function setupStore(preloadedState?: PreloadedState<TRootState>) {
  console.log(123123)
  return configureStore({
    reducer: rootReducer,
  });
}

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
