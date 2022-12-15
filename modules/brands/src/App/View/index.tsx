
import Dialog from '@package/dialog';
import { query } from '@helper/utils';
import { Header } from "@library/kit";

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Modify from './Modify';
import Content from './Content';

import { getBrands } from '../store/commands';
import { resetStateAction } from '../store/slice';

import styles from './default.module.scss';


function Brands() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    dispatch(getBrands(query.toObject(location['search'])));
  }, [location]);

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <section className={styles['content']}>
        <header className={styles['header']}>
          <Header>Производитель</Header>
        </header>
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

export default Brands;