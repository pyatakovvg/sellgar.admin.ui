
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
        { React.Children.map(children, (child: any) => React.cloneElement(child)) }
      </div>
    </div>
  );
}

MetricDefault.defaultProps = {
  label: null,
  children: null,
};

export default MetricDefault;
