
import React from 'react';


const routes: Array<IRoute> = [
  {
    path: '/',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-main" */'@module/main')),
  },
  {
    path: '/store',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-store" */'@module/store')),
  },
  {
    path: '/products',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-products" */'@module/products')),
  },
  {
    path: '/products/brands',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-brands" */'@module/brands')),
  },
  {
    path: '/products/groups',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-groups" */'@module/groups')),
  },
  {
    path: '/products/categories',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-categories" */'@module/categories')),
  },
  {
    path: '/products/attributes',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-attributes" */'@module/attributes')),
  },
  {
    path: '/products/units',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-units" */'@module/units')),
  },
  {
    path: '/products/:uuid',
    wrapper: 'composite',
    module: React.lazy(() => import(/* webpackChunkName: "module-product" */'@module/product')),
  },
  {
    path: '/gallery',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-gallery" */'@module/gallery')),
  },
  {
    path: '/checkouts',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-checkouts" */'@module/checkouts')),
  },
  {
    path: '/checkouts/:uuid',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-checkout" */'@module/checkout')),
  },
  {
    path: '/comments',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-comments" */'@module/comments')),
  },
  {
    path: '/users',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-users" */'@module/users')),
  },
  {
    path: '/users/:uuid',
    wrapper: 'default',
    module: React.lazy(() => import(/* webpackChunkName: "module-user" */'@module/user')),
  },
];

export default routes;
