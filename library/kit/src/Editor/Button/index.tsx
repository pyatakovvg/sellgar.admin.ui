
import React from 'react';

import cn from 'classnames';
import styles from './defaults.module.scss';


function Block({ className, active, style, icon, onToggle }: any) {
  const wrapperClassName = cn(styles['wrapper'], className, icon, {
    [styles['active']]: active,
  });

  function handleClick(event: any) {
    event.preventDefault();

    onToggle(style);
  }

  return (
    <span
      className={wrapperClassName}
      onMouseDown={(event) => handleClick(event)}
    />
  );
}

export default Block;
