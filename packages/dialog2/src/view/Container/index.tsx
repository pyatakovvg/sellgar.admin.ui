
import React from 'react';

import cn from 'classnames';
import styles from './defaults.module.scss';


interface IProps {
  children: any;
  onClose(): void;
}


function Container(props: IProps) {
  const closeClassName = React.useMemo(() => cn(styles['close'], 'fa fa-close'), []);

  return (
    <div className={styles['wrapper']}>
      <span className={closeClassName} onClick={props.onClose} />
      { props.children }
    </div>
  );
}

export default Container;
