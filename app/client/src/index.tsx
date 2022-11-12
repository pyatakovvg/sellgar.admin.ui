
import BaseData from '@package/base-data';
import Push, { pushFail } from '@package/push';
import { Application, Config, Router, Wrapper } from '@library/app';
import { getProfile, events as profileEvents } from '@widget/profile';
import { config as requestConfig, events as requestEvents } from '@package/request';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import createStore from './store';
import navigate from './configs/navigate';
import publicRoutes from './configs/routes/public';
import protectedRoutes from './configs/routes/protected';

import './styles/index.scss';


(async () => {
  try {
    requestConfig({
      baseUrl: process.env['REACT_APP_GATEWAY_API'] || '/',
    });

    const app = new Application(new Config({
      navigate,
    }));

    app.addLoader(import('./Loader'));

    app.addRouter(new Router(publicRoutes));
    app.addRouter(new Router(protectedRoutes, { protected: true }));

    app.addWrapper('empty', new Wrapper(import('@wrapper/empty')));
    app.addWrapper('default', new Wrapper(import('@wrapper/default')));
    app.addWrapper('composite', new Wrapper(import('@wrapper/composite')));


    app.execCallback('check:profile', async function() {
      await app.react.dispatch(getProfile());
    });


    profileEvents.on('auth', () => {
      app.events.emit('init', true);
    });

    profileEvents.on('not-auth', () => {
      app.events.emit('init', true);
      app.react.navigate(process.env['PUBLIC_URL'] + '/sign-in');
    });

    profileEvents.on('error', () => {
      app.events.emit('init', true);
      app.react.navigate(process.env['PUBLIC_URL'] + '/sign-in');
    });


    requestEvents.on('error', (error) => {
      if (error['status'] === 401) {
        app.react.navigate(process.env['PUBLIC_URL'] + '/sign-in');
      }
      else {
        app.react.dispatch(pushFail('Что-то пошло не так!', error?.['data']?.['message'] ?? `None (${error?.['data']?.['code']}` ?? `None)`));
      }
    });

    const store = await createStore(app);
    const selector = document.querySelector('#root');

    if ( ! selector) {
      throw new Error('selector is null');
    }

    const root = ReactDOM.createRoot(selector);
    const AppView = app.createView();

    root.render(
      <Provider store={store}>
        <BaseData>
          <AppView />
        </BaseData>
        <Push />
      </Provider>
    );
  }
  catch(error) {

    console.log(error);
  }
})();
