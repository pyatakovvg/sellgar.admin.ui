
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  className?: string;
  value: boolean;
  mode?: TMode;
  children?: JSX.Element | string;
  disabled?: boolean;
  onChange(value: boolean): void;
}


function DefaultCheckbox({ className, value, children, disabled, onChange }: IProps): JSX.Element | null {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['checked']]: value,
    [styles['disabled']]: disabled,
  }), [className, value, disabled]);

  function handleCheck() {
    if (disabled) {
      return void 0;
    }
    onChange( ! value);
  }

  return (
    <div className={wrapperClassName} onClick={handleCheck}>
      <div className={styles['content']}>
        <span className={cn(styles['marker'], 'fa-solid fa-check')} />
      </div>
      { !! children && (
        <div className={styles['label']}>
          { children }
        </div>
      )}
    </div>
  );
}

export default DefaultCheckbox;
