
const navigate = [
  {
    title: 'Витрина',
    path: '/products',
    icon: 'fa-solid fa-bag-shopping',
  },
  {
    title: 'Параметры',
    path: '/params/groups',
    icon: 'fa-solid fa-gear',
    navigate: [
      {
        title: 'Группа',
        path: '/params/groups',
      },
      {
        title: 'Категория',
        path: '/params/categories',
      },
      {
        title: 'Производитель',
        path: '/params/brands',
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
    path: '/images',
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
