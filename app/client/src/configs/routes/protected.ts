
const routes: Array<any> = [
  {
    path: '/',
    module: import('@module/main'),
  },
  {
    path: '/store',
    module: import('@module/store'),
  },
  {
    path: '/products/:uuid',
    module: import('@module/product'),
  },
  {
    path: '/products',
    wrapper: 'composite',
    module: import('@module/products'),
  },
  {
    path: '/products/groups',
    wrapper: 'composite',
    module: import('@module/groups'),
  },
  {
    path: '/products/categories',
    wrapper: 'composite',
    module: import('@module/categories'),
  },
  {
    path: '/products/brands',
    wrapper: 'composite',
    module: import('@module/brands'),
  },
  {
    path: '/products/attributes',
    wrapper: 'composite',
    module: import('@module/attributes'),
  },
  {
    path: '/products/units',
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
  {
    path: '/users/:uuid',
    wrapper: 'composite',
    module: import('@module/user'),
  },
];

export default routes;
