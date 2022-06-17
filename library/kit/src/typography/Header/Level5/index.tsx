
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: JSX.Element | string;
}


function Level5({ className, children }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <h5 className={contentClassName}>{ children }</h5>
  );
}

Level5.defaultProps = {
  className: null,
  children: null,
};

export default Level5;
