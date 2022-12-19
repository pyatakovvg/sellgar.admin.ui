
import Dialog from '@package/dialog';
import { query } from '@helper/utils';
import { createCancelToken } from '@package/request';
import { ScrollProvider, Header } from "@library/kit";

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Filter from './Filter';
import Modify from './Modify';
import Content from './Content';

import { resetStateAction, loadingPageProcessAction } from '../store/slice';
import { getProducts, getBrands, getGroups, getCategories } from '../store/commands';

import styles from './default.module.scss';


function Page() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const cancel = createCancelToken();

    dispatch(getBrands({ token: cancel['token'] }));
    dispatch(getGroups({ token: cancel['token'] }));
    dispatch(getCategories({ token: cancel['token'] }));

    return () => {
      cancel.cancel();
      dispatch(resetStateAction());
    }
  }, []);

  React.useEffect(() => {
    const cancel = createCancelToken();
    const search = query.toObject(location['search']);

    (async () => {
      dispatch(loadingPageProcessAction(true));
      await dispatch(getProducts(search, { token: cancel['token'] }));
      dispatch(loadingPageProcessAction(false));
    })();
    return () => {
      cancel.cancel();
    };
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <ScrollProvider className={styles['content']}>
        <header className={styles['header']}>
          <Header>Склад товаров</Header>
        </header>
        <aside className={styles['filter']}>
          <Filter />
        </aside>
        <div className={styles['list']}>
          <Content />
        </div>
      </ScrollProvider>

      <Dialog name={'modify'}>
        <Modify />
      </Dialog>
    </section>
  );
}

export default Page;