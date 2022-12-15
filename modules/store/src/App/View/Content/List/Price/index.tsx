
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  price?: number;
  purchasePrice?: number;
  currency?: any;
}


function Item({ price, purchasePrice, currency }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <div className={styles['price']}>
          <Text type={'strong'}>{ numeral(price).format() }</Text>
        </div>
        <div className={styles['currency']}>
          <Text type={'strong'}>{ currency?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
      <div className={styles['field']}>
        <div className={styles['price']}>
          <Text type={'description'}>{ numeral(purchasePrice).format() }</Text>
        </div>
        <div className={styles['currency']}>
          <Text type={'description'}>{ currency?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
    </div>
  );
}

export default Item;
