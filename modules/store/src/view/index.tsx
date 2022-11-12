
import Dialog from '@package/dialog';
import { query } from '@helper/utils';
import { Paging } from "@library/design";
import { createCancelToken } from '@package/request';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Filter from './Filter';
import Modify from './Modify';
import Content from './Content';

import { getProducts } from '../store/commands';
import { resetStateAction, selectMeta } from '../store/slice';

import styles from './default.module.scss';


function Page() {
  const location = useLocation();
  const dispatch = useDispatch();

  const meta = useSelector(selectMeta);

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  React.useLayoutEffect(() => {
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
          <Paging totalRows={meta?.['totalRows'] ?? 0} />
        </div>
      </section>

      <Dialog name={'modify'}>
        <Modify />
      </Dialog>
    </section>
  );
}

export default Page;