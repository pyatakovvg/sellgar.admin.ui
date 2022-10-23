
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { name as pushReducerName, reducer as pushReducer } from '@package/push';
import { name as storeReducerName, reducer as storeReducer } from '@widget/store';
import { name as baseReducerName, reducer as baseReducer } from '@package/base-data';
import { name as dialogReducerName, reducer as dialogReducer } from '@package/dialog';
import { name as profileReducerName, reducer as profileReducer } from '@widget/profile';
import { name as galleryReducerName, reducer as galleryReducer } from '@widget/gallery';

import { reducer as formReducer } from 'redux-form';


type TModule = {
  [name: string]: any;
};


async function createStore(app: any) {
  const modules = app.getModules();
  const appModules: TModule = {};

  for (let index in modules) {
    if (modules.hasOwnProperty(index)) {
      const module = await modules[index];
      if (('name' in module) && ('reducer' in module)) {
        appModules[module['name']] = module['reducer'];
      }
    }
  }

  return configureStore({
    reducer: combineReducers({
      ...appModules,
      'form': formReducer,
      [baseReducerName]: baseReducer,
      [pushReducerName]: pushReducer,
      [storeReducerName]: storeReducer,
      [dialogReducerName]: dialogReducer,
      [profileReducerName]: profileReducer,
      [galleryReducerName]: galleryReducer,
    }),
  });
}

export default createStore;
