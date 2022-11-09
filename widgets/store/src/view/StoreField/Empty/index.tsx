
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <Text>Товар со склада не указан</Text>
    </div>
  );
}

export default React.memo(Empty);
