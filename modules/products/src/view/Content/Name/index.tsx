
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  name?: any;
}


function Name({ name }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>{ name || '---' }</Text>
      </div>
    </div>
  );
}

export default Name;
