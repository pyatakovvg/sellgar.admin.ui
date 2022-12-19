
import { Header } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectData } from '../../store/slice';

import styles from './default.module.scss';


function HeaderBlock() {
  const data: any = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Заказы №{ numeral(data?.['externalId']).format('000000') }</Header>
      </div>
    </div>
  );
}

export default HeaderBlock;