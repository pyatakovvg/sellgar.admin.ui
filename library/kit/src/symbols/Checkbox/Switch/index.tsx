
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  value: boolean;
  disabled?: boolean;
  onChange(value: boolean): void;
}


function SwitchCheckbox({ className, value, disabled, onChange }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], {
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
    <div className={styles['wrapper']}>
      <div className={contentClassName} onClick={handleCheck}>
        <span className={styles['marker']} />
      </div>
    </div>
  );
}

export default SwitchCheckbox;
