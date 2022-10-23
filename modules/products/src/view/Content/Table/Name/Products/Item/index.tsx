
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  isTarget: boolean;
}

function Products({ isTarget }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-tag', {
    [styles['target']]: isTarget,
  }), [isTarget]);

  return (
    <div className={styles['wrapper']}>
      <span className={iconClassName} />
    </div>
  );
}

export default Products;