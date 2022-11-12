
import React from 'react';

import styles from './default.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['value']}>Нет данных</span>
    </div>
  );
}

export default React.memo(Empty);
