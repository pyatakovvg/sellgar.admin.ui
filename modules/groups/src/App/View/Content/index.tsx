
import {Paging} from "@library/design";

import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import List from './List';

import { selectMeta } from '../../store/slice';

import styles from './@media/index.module.scss';


function Content() {
  const meta = useSelector(selectMeta);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['header']}>
          <Header />
        </div>
        <div className={styles['list']}>
          <List />
        </div>
      </div>
      { !! meta.totalRows && (
        <div className={styles['controls']}>
          <Paging totalRows={meta.totalRows} />
        </div>
      )}
    </section>
  );
}

export default Content;