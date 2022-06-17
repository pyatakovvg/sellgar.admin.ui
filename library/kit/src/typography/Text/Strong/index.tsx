
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: JSX.Element | React.ReactNode | string;
}


function StrongText({ className, children }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <p className={contentClassName}>{ children }</p>
  );
}

StrongText.defaultProps = {
  className: null,
  children: null,
};

export default StrongText;
