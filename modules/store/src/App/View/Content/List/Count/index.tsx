
import { Text } from '@library/kit';

import React from 'react';

import cn from "classnames";
import styles from './default.module.scss';


interface IProps {
  count?: number;
  reserve?: number;
}


function Count({ count, reserve }: IProps) {
  const countClassName = cn({
    [styles['danger']]: count === 0,
  });

  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'} className={countClassName}>{ count || 0 } шт.</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'description'}>{ reserve || 0 } шт.</Text>
      </div>
    </div>
  );
}

export default Count;
