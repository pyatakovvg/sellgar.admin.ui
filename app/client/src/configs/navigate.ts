
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
    title: 'Параметры',
    path: '/params/brands',
    icon: 'fa-solid fa-gear',
    navigate: [
      {
        title: 'Производитель',
        path: '/params/brands',
      },
      {
        title: 'Группа',
        path: '/params/groups',
      },
      {
        title: 'Категория',
        path: '/params/categories',
      },
      {
        title: 'Атрибуты',
        path: '/params/attributes',
      },
      {
        title: 'Единицы измерения',
        path: '/params/units',
      },
    ]
  },
  {
    title: 'Галлерея',
    path: '/gallery',
    icon: 'fa-solid fa-images',
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
