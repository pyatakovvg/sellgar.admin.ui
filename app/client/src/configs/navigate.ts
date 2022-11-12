
const navigate = [
  {
    title: 'Склад',
    path: '/store',
    icon: 'fa-solid fa-database',
  },
  {
    title: 'Каталог',
    path: '/products',
    icon: 'fa-solid fa-bag-shopping',
    navigate: [
      {
        title: 'Каталог',
        path: '/products',
      },
      {
        title: 'Производитель',
        path: '/products/brands',
      },
      {
        title: 'Группа',
        path: '/products/groups',
      },
      {
        title: 'Категория',
        path: '/products/categories',
      },
      {
        title: 'Атрибуты',
        path: '/products/attributes',
      },
      {
        title: 'Единицы измерения',
        path: '/products/units',
      },
    ]
  },
  {
    title: 'Галлерея',
    path: '/gallery',
    icon: 'fa-solid fa-images',
  },
  {
    title: 'Заказы',
    path: '/checkouts',
    icon: 'fa-solid fa-money-bill',
  },
  {
    title: 'Комментарии',
    path: '/comments',
    icon: 'fa-solid fa-comments',
  },
  {
    title: 'Пользователи',
    path: '/users',
    icon: 'fa-solid fa-users',
    navigate: [
      {
        title: 'Пользователи',
        path: '/users',
      }
    ],
  },
];

export default navigate;
