
import Dialog from '@package/dialog';
import { query } from '@helper/utils';
import { Header } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Filter from './Filter';
import Modify from './Modify';
import Content from './Content';

import { resetStateAction } from '../store/slice';
import { getCategories } from '../store/commands';

import styles from './default.module.scss';


function Category() {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  React.useEffect(() => {
    (async function() {
      await dispatch(getCategories(query.toObject(location['search'])));
    })();
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <section className={styles['content']}>
        <div className={styles['header']}>
          <Header>Категория товара</Header>
        </div>
        <div className={styles['filter']}>
          <Filter />
        </div>
        <div className={styles['list']}>
          <Content />
        </div>
      </section>

      <Dialog name={'modify'}>
        <Modify />
      </Dialog>
    </section>
  );
}

export default React.memo(Category);