
import { PushProvider } from '@package/push-2';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import ErrorBoundary from './ErrorBoundary';

import navigate from './configs/navigate';
import publicRoutes from './configs/routes/public';
import protectedRoutes from './configs/routes/protected';

import './styles/index.scss';


const root = ReactDOM.createRoot(document.querySelector('#root') ! );

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App
        navigate={navigate}
        publicRoutes={publicRoutes}
        protectedRoutes={protectedRoutes}
      />
      <PushProvider />
    </ErrorBoundary>
  </BrowserRouter>
);
