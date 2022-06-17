
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: JSX.Element | string;
}


function Level1({ className, children }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <h1 className={contentClassName}>{ children }</h1>
  );
}

Level1.defaultProps = {
  className: null,
  children: null,
};

export default Level1;
