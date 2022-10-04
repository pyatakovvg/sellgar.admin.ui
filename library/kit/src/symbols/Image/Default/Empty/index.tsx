
import React from 'react';

import cn from "classnames";
import styles from './default.module.scss';


function Empty() {
  return (
    <span className={styles['wrapper']}>
      <span className={cn(styles['icon'], "fa-solid fa-image")} />
    </span>
  );
}

export default React.memo(Empty);
