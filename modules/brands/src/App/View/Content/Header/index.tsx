
import { Header, Link } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectMeta } from '../../../store/slice';

import styles from './default.module.scss';


function Headers() {
  const location = useLocation();
  const meta = useSelector(selectMeta);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Найдено { meta.totalRows } { nounDeclension(meta.totalRows, ['запись', 'зыписи', 'записей']) }</Header>
      </div>
      {Boolean(location.search) && (
        <div className={styles['control']}>
          <Link href={process.env['PUBLIC_URL'] + '/products/brands'}>Сбросить фильтр</Link>
        </div>
      )}
    </div>
  );
}

export default React.memo(Headers);