
import { Text } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectMeta } from '../../store/slice';

import styles from './default.module.scss';


function Filter() {
  const meta: any = useSelector(selectMeta);
  const totalRows = meta?.['totalRows'] ?? 0;

  return (
    <div className={styles['wrapper']}>
      <Text>Найдено { totalRows } { nounDeclension(totalRows, ['товар', 'товара', 'товаров']) }</Text>
    </div>
  );
}

export default Filter;