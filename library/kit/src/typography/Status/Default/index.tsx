
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


type TMode = 'danger' | 'success' | 'primary' | 'default';

interface IProps {
  className?: string;
  mode?: TMode;
  children: any;
}


function TextStatus({ className, mode, children }: IProps) {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], className, {
    [styles['mode--danger']]: mode === 'danger',
    [styles['mode--primary']]: mode === 'primary',
    [styles['mode--success']]: mode === 'success',
  }), [className]);
  return (
    <span className={wrapperClassName}>
      { children }
    </span>
  );
}

TextStatus.defaultProps = {
  className: '',
  mode: 'default',
  children: 'No status',
};

export default TextStatus;
