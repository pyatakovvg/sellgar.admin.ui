
import React from 'react';

import styles from './default.module.scss';


function MetricDefault({ children, label }: any) {
  return (
    <div className={styles['wrapper']}>
      { !! label && (
        <div className={styles['label']}>
          { label }
        </div>
      )}
      <div className={styles['content']}>
        { children }
      </div>
    </div>
  );
}

MetricDefault.defaultProps = {
  label: null,
  children: null,
};

export default MetricDefault;
