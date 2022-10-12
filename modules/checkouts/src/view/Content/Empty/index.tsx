
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <Text type={'strong'}>Нет данных для отображение</Text>
    </div>
  );
}

export default React.memo(Empty);