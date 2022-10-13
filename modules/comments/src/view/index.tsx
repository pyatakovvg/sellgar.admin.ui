
import { query } from '@helper/utils';
import { Paging } from '@library/design';
import { createCancelToken } from '@package/request';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Filter from './Filter';
import Content from './Content';

import { getComments } from '../store/commands';
import { selectMeta, resetStateAction } from '../store/slice';

import styles from './default.module.scss';


function Comments() {
  const dispatch = useDispatch();
  const location = useLocation();

  const meta = useSelector(selectMeta);


  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    };
  }, []);

  React.useEffect(() => {
    const cancel =  createCancelToken();
    const search = query.toObject(location['search']);

    async function init() {
      await dispatch(getComments(search, { cancel }));
    }
    init();
    return () => {
      cancel.cancel();
    }
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
    </section>
  );
}

export default Comments;