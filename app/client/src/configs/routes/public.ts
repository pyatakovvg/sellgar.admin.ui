
import React from 'react';


const routes: Array<IRoute> = [
  {
    path: '/sign-in',
    module: React.lazy(() => import(/* webpackChunkName: "module-sign-in" */'@module/sign-in')),
  },
  {
    path: '*',
    module: React.lazy(() => import(/* webpackChunkName: "module-not-found" */'@module/not-found')),
  },
];

export default routes;
