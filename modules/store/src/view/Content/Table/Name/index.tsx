
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  name?: string;
  brand?: any;
}


function Name({ name, brand }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>{ name || 'Нет наименования'}</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'description'}>{ brand?.['name'] || 'Не  указан'}</Text>
      </div>
    </div>
  );
}

export default Name;