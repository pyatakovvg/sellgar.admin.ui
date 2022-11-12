
import React from 'react';

import Header from './Header';
import List from './List';

import styles from './default.module.scss';


function Content() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <List />
      </div>
    </div>
  );
}

export default React.memo(Content);