
import { query } from '@helper/utils';
import { createCancelToken } from '@package/request';
import { ScrollProvider, Header } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Filter from './Filter';
import Content from './Content';

import { getProducts } from '../store/commands';

import styles from './default.module.scss';


function Products() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const cancelProducts = createCancelToken();

    async function init() {
      const search = query.toObject(location['search']);

      await dispatch<any>(getProducts(search, { token: cancelProducts['token'] }));
    }
    init();
    return () => {
      cancelProducts.cancel();
    };
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <ScrollProvider className={styles['content']}>
        <header className={styles['header']}>
          <Header>Каталок товаров</Header>
        </header>
        <aside className={styles['filter']}>
          <Filter />
        </aside>
        <div className={styles['list']}>
          <Content />
        </div>
      </ScrollProvider>
    </section>
  );
}

export default Products;