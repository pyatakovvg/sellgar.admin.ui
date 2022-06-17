
import { Spinner } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  count?: number;
  disabled?: boolean;
  children: any;
  inProcess?: boolean;
  onClick(): void;
}


function Modes({ count, disabled, children, inProcess, onClick }: IProps) {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['disabled']]: disabled,
    [styles['in-process']]: inProcess,
  }), [disabled, inProcess]);

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
      { !! count && (
        <div className={styles['bucket']}>
          <span className={styles['count']}>{ count }</span>
        </div>
      )}
      <div className={styles['title']}>В корзину</div>
      <div className={styles['amount']}>{ children }</div>
      {inProcess && (
        <div className={styles['spinner']}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Modes;
