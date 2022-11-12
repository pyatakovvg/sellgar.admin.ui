
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: any;
}


function DefaultLabel({ className, children }: IProps) {
  const contentClassName = React.useMemo(() => cn(styles['content'], className || ''), [className]);

  return (
    <label className={contentClassName}>{ children }</label>
  );
}

DefaultLabel.defaultProps = {
  className: null,
  children: null,
};

export default DefaultLabel;
