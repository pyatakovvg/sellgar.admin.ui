
import { Spinner } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Loading() {
  return (
    <div className={styles['wrapper']}>
      <Spinner />
    </div>
  );
}

export default Loading;