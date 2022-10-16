
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  payment?: any;
  delivery?: any;
}


function Info({ payment, delivery }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <Text>{ payment?.['name'] ?? '---' }</Text>
      </div>
      <div className={styles['field']}>
        <Text>{ delivery?.['name'] ?? '---' }</Text>
      </div>
    </div>
  );
}

export default Info;
