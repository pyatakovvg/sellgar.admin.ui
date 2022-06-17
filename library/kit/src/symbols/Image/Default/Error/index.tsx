
import React from 'react';

import styles from './default.module.scss';


function Error(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <p>Error</p>
    </div>
  );
}

Error.defaultProps = {};

export default React.memo(Error);
