
import { Header } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Filter from './Filter';
import Content from './Content';

import { getOrders, resetStateAction } from '../index';

import styles from './default.module.scss';


function Products(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getOrders());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Заказы</Header>
      </header>
      <aside className={styles['filter']}>
        <Filter />
      </aside>
      <section className={styles['content']}>
        <Content />
      </section>
    </section>
  );
}

export default Products;