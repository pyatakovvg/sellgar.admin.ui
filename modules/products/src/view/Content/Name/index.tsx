
import { Text } from '@library/kit';

import React from 'react';

import Products from './Products';

import styles from './default.module.scss';


interface IProps {
  name?: any;
  products?: Array<any>;
}

function Item({ name, products }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>{ name || '---' }</Text>
      </div>
      <div className={styles['line']}>
        <Products items={products || []} />
      </div>
    </div>
  );
}

export default Item;