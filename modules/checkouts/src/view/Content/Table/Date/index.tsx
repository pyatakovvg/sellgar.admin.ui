
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
      <div className={styles['field']}>
        <Text>{ moment(updatedAt).format('DD.MM.YYYY - HH:mm') }</Text>
      </div>
      <div className={styles['field']}>
        <Text type={'description'}>{ moment(createdAt).format('DD.MM.YYYY - HH:mm') }</Text>
      </div>
    </div>
  );
}

export default Item;
