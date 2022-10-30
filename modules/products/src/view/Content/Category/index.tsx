
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  group?: any;
  category?: any;
  products?: Array<any>;
}


function Item({ group, category, product }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>{ group?.['name'] ?? '---' }</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'strong'}>{ category?.['name'] ?? '---' }</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'strong'}>{ product?.['brand']?.['name'] ?? '---' }</Text>
      </div>
    </div>
  );
}

export default Item;
