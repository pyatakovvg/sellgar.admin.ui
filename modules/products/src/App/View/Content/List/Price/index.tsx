
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  product?: any;
}


function Item({ product }: IProps) {
  if ( ! product) {
    return null;
  }
  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <div className={styles['price']}>
          <Text type={'strong'}>{ product['price'] ? numeral(product['price']).format()  : '---'}</Text>
        </div>
        <div className={styles['currency']}>
          <Text type={'strong'}>{ product['currency']?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
      <div className={styles['field']}>
        <div className={styles['price']}>
          <Text type={'description'}>{ product['purchasePrice'] ? numeral(product['purchasePrice']).format() : '---' }</Text>
        </div>
        <div className={styles['currency']}>
          <Text type={'description'}>{ product['currency']?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
    </div>
  );
}

export default Item;
