
import React from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import Filter from './Filter';
import Content from './Content';

import { getProducts, resetStateAction } from '../index';

import styles from './default.module.scss';


function Products(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getProducts());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header />
      </header>
      <aside className={styles['filter']}>
        <Filter />
      </aside>
      <section className={styles['content']}>
        <Content />
      </section>
      <div className={styles['controls']}>

      </div>
    </section>
  );
}

export default Products;