
import { Text } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectMeta } from '../../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const meta: any = useSelector(selectMeta);
  const totalRows = meta?.['totalRows'] ?? 0;

  return (
    <div className={styles['wrapper']}>
      <Text>Найдено { totalRows } { nounDeclension(totalRows, ['счет', 'счета', 'счетов']) }</Text>
    </div>
  );
}

export default Users;