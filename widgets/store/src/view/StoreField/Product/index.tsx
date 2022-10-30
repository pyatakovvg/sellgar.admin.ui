
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  name: string;
  vendor: string;
  price: number;
  purchasePrice: number;
  currency: any;
}


function Product({ name, vendor, price, purchasePrice, currency }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['line']}>
          <Text>{ name }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>Арт.: { vendor }</Text>
        </div>
      </div>
      <div className={styles['price']}>
        <div className={styles['line']}>
          <Text type={'strong'}>{ price } { currency['displayName'] }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>{ purchasePrice } { currency['displayName'] }</Text>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
