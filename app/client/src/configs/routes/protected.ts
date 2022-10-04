
const routes: Array<any> = [
  {
    path: '/',
    module: import('@module/main'),
  },
  {
    path: '/products/:uuid',
    module: import('@module/product'),
  },
  {
    path: '/products',
    module: import('@module/products'),
  },
  {
    path: '/params/groups',
    wrapper: 'composite',
    module: import('@module/groups'),
  },
  {
    path: '/params/categories',
    wrapper: 'composite',
    module: import('@module/categories'),
  },
  {
    path: '/params/brands',
    wrapper: 'composite',
    module: import('@module/brands'),
  },
  {
    path: '/params/attributes',
    wrapper: 'composite',
    module: import('@module/attributes'),
  },
  {
    path: '/params/units',
    wrapper: 'composite',
    module: import('@module/units'),
  },
  {
    path: '/checkouts',
    wrapper: 'default',
    module: import('@module/checkouts'),
  },
  {
    path: '/checkouts/:uuid',
    wrapper: 'default',
    module: import('@module/checkout'),
  },
  {
    path: '/comments',
    wrapper: 'default',
    module: import('@module/comments'),
  },
  {
    path: '/gallery',
    module: import('@module/gallery'),
  },
  {
    path: '/gallery/:uuid',
    module: import('@module/gallery'),
  },
  {
    path: '/users',
    wrapper: 'composite',
    module: import('@module/users'),
  },
];

export default routes;
