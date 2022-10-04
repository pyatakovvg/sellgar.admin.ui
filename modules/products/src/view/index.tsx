
import { query } from '@helper/utils';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Filter from './Filter';
import Content from './Content';

import {
  getBrands,
  getGroups,
  getCategories,

  getProducts,
  resetStateAction,
} from '../index';

import styles from './default.module.scss';


function Products() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getBrands());
      await dispatch<any>(getGroups());
      await dispatch<any>(getCategories());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  React.useEffect(() => {
    async function init() {
      const search = query.toObject(location['search']);

      await dispatch<any>(getProducts(search));
    }
    init();
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

        </div>
      </section>
    </section>
  );
}

export default Products;