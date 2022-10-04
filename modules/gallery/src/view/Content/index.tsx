
import React from 'react';

import Folders from './Folders';
import Images from './Images';

import styles from './default.module.scss';


function Content() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <Folders />
      </div>
      <div className={styles['block']}>
        <Images />
      </div>
    </div>
  );
}

export default Content;
