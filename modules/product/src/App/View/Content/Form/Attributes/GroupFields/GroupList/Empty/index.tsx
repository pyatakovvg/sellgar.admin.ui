
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Text type={'strong'}>Свойства не указаны</Text>
      </div>
    </div>
  );
}

export default React.memo(Empty);
