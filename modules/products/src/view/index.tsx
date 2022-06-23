
import { Header, Button } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Filter from './Filter';
import Content from './Content';

import { createProduct, getProducts, resetStateAction } from '../index';

import styles from './default.module.scss';


function Products(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getProducts());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  async function handleAdd() {
    const result = await dispatch<any>(createProduct());

    if (result) {
      navigate(process.env['PUBLIC_URL'] + '/products/' + result['uuid'])
    }
  }

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Витрина</Header>
        <Button onClick={handleAdd}>Добавить</Button>
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