
import React from 'react';
import { Provider } from 'react-redux';

import View from './View';

import { setupStore } from './store/create';


const store = setupStore();


function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default React.memo(App);
