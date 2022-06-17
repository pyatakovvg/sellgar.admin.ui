
const routes: Array<any> = [
  {
    path: '/sign-in',
    wrapper: 'empty',
    module: import('@module/sign-in')
  },
  {
    path: '*',
    wrapper: 'empty',
    module: import('@module/error')
  },
];

export default routes;
