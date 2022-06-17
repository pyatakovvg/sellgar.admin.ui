
import { Spinner } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Loader() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Spinner />
      </div>
    </div>
  );
}

export default Loader;
