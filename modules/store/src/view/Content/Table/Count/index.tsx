
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  count?: number;
  reserve?: number;
}


function Count({ count, reserve }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>{ count || 0 } шт.</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'description'}>{ reserve || 0 } шт.</Text>
      </div>
    </div>
  );
}

export default Count;
