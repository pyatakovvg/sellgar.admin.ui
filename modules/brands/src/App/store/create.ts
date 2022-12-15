
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { name as dialogReducerName, reducer as dialogReducer } from '@package/dialog';
import { name as galleryReducerName, reducer as galleryReducer } from '@widget/gallery';

import { reducer as formReducer } from 'redux-form';

import { reducer, name } from './slice';


const rootReducer = combineReducers({
  form: formReducer,
  [name]: reducer,
  [dialogReducerName]: dialogReducer,
  [galleryReducerName]: galleryReducer,
});


export function setupStore(preloadedState?: PreloadedState<TRootState>) {
  return configureStore({
    reducer: rootReducer,
  });
}

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
