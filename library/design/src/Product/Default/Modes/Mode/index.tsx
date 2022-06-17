
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IMode {
  value: string;
  unit: string;
  active?: boolean;
  disabled?: boolean;
  onClick?(): void;
}


function Mode({ value, unit, active, disabled, onClick }: IMode) {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['active']]: active,
    [styles['disabled']]: disabled,
  }), [active, disabled]);

  function handleClick() {
    if (disabled) {
      return void 0;
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={wrapperClassName} onClick={handleClick}>
      <div className={styles['content']}>{ value } { unit }</div>
    </div>
  );
}

export default Mode;
