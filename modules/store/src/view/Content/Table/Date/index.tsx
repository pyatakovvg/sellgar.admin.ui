
import { Text } from '@library/kit';
import moment from '@package/moment';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  createdAt?: string;
  updatedAt?: string;
}


function Item({ createdAt, updatedAt }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text>{ moment(updatedAt).format('DD.MM.YYYY') }</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'description'}>{ moment(createdAt).format('DD.MM.YYYY') }</Text>
      </div>
    </div>
  );
}

export default Item;
