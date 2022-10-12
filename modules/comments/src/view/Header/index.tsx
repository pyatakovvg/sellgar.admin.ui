
import { Header } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Controls() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Комментарии</Header>
      </div>
    </div>
  );
}

export default Controls;