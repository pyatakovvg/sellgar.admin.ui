
import React from 'react';

import Table from './Table';
import Header from './Header';

import styles from "./default.module.scss";


function Content() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <Table />
      </div>
    </div>
  );
}

export default React.memo(Content);