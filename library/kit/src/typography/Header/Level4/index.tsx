
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: JSX.Element | string;
}


function Level4({ className, children }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <h4 className={contentClassName}>{ children }</h4>
  );
}

Level4.defaultProps = {
  className: null,
  children: null,
};

export default Level4;
