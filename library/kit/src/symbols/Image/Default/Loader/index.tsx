
import React from 'react';

import Spinner from '../../../Spinner';

import styles from './default.module.scss';


function Loader(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <Spinner />
    </div>
  );
}

Loader.defaultProps = {};

export default React.memo(Loader);
