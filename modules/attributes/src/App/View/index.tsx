
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
import { getAttributes, getUnits } from '../store/commands';

import styles from './default.module.scss';


function Brand() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUnits());
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  React.useEffect(() => {
    async function init() {
      const search = query.toObject(location['search']);

      await dispatch(getAttributes(search));
    }
    init();
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['controls']}>
        <Controls />
      </header>
      <section className={styles['content']}>
        <div className={styles['header']}>
          <Header>Свойство товара</Header>
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

export default Brand;