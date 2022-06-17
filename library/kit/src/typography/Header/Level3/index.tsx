
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: JSX.Element | string;
}


function Level3({ className, children }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <h3 className={contentClassName}>{ children }</h3>
  );
}

Level3.defaultProps = {
  className: null,
  children: null,
};

export default Level3;
