
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  isSelect: boolean;
  value: any;
  disabled?: boolean;
  onClick(): void;
}


function Option({ isSelect, value, disabled, onClick }: IProps): JSX.Element | null {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['disabled']]: disabled,
    [styles['selected']]: isSelect,
  }), [disabled, isSelect]);

  function handleClick() {
    if (disabled || isSelect) {
      return void 0;
    }
    onClick();
  }

  return (
    <div className={wrapperClassName} onClick={handleClick}>
      <span className={styles['value']}>{ value }</span>
    </div>
  );
}

Option.defaultProps = {
  className: null,
  value: null,
  options: [],
  disabled: false,
};

export default Option;
