
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function BucketWidget() {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-cart-shopping'), []);

  return (
    <div className={styles['wrapper']}>
      <span className={iconClassName} />
      <span className={styles['title']}>Корзина</span>
      { (
        <span className={styles['count']}>10</span>
      )}
    </div>
  );
}

export default BucketWidget;
