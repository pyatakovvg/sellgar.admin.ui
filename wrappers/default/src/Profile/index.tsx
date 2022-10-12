
import React from 'react';

import styles from './default.module.scss';


function Profile() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['thumb']}>

      </div>
      <div className={styles['content']}>
        <p className={styles['text']}>не определен</p>
      </div>
    </div>
  );
}

export default Profile;
