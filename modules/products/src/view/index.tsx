
import { query } from '@helper/utils';
import { Paging } from '@library/design';
import { createCancelToken } from '@package/request';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Filter from './Filter';
import Content from './Content';

import { resetStateAction, selectMeta } from '../store/slice';
import { getBrands, getGroups, getCategories, getProducts } from '../store/commands';

import styles from './default.module.scss';


function Products() {
  const location = useLocation();
  const dispatch = useDispatch();

  const meta = useSelector(selectMeta);


  React.useEffect(() => {
    const cancelBrands = createCancelToken();
    const cancelGroups = createCancelToken();
    const cancelCategories = createCancelToken();

    async function init() {
      await dispatch<any>(getBrands({ token: cancelBrands['token'] }));
      await dispatch<any>(getGroups({ token: cancelGroups['token'] }));
      await dispatch<any>(getCategories({ token: cancelCategories['token'] }));
    }
    init();
    return () => {
      cancelBrands.cancel();
      cancelGroups.cancel();
      cancelCategories.cancel();

      dispatch(resetStateAction());
    }
  }, []);

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