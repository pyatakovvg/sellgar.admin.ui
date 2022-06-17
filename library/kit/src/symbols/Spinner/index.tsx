
import React from 'react';

import styles from './default.module.scss';


function Spinner(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['point']} />
      <span className={styles['point']} />
      <span className={styles['point']} />
    </div>
  );
}

Spinner.defaultProps = {};

export default React.memo(Spinner);
