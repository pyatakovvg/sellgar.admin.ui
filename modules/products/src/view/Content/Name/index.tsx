
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  name?: any;
  product?: any;
}


function Name({ name, product }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>{ name || '---' }</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'description'}>{ product?.['brand']?.['name'] ?? '---' }</Text>
      </div>
    </div>
  );
}

export default Name;
