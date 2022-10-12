
import { query } from '@helper/utils';
import { Paging } from '@library/design';
import { createCancelToken } from '@package/request';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Filter from './Filter';
import Content from './Content';

import { getOrders } from '../store/commands';
import { resetStateAction, selectMeta } from '../store/slice';

import styles from './default.module.scss';


function Products() {
  const location = useLocation();
  const dispatch = useDispatch();

  const meta = useSelector(selectMeta);


  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  React.useEffect(() => {
    const cancelOrders = createCancelToken();

    async function init() {
      const search = query.toObject(location['search']);

      await dispatch<any>(getOrders(search, { token: cancelOrders.token }));
    }
    init();
    return () => {
      cancelOrders.cancel();
    };
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header />
      </header>
      <section className={styles['content']}>
        <aside className={styles['filter']}>
          <Filter />
        </aside>
        <div className={styles['list']}>
          <Content />
        </div>
        <div className={styles['controls']}>
          <Paging totalRows={meta['totalRows']} onChange={() => {}} />
        </div>
      </section>
    </section>
  );
}

export default Products;