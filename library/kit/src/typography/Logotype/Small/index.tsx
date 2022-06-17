
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
}


function DefaultText({ className }: IProps): JSX.Element {
  const contentClassName = React.useMemo(() => cn(styles['logotype'], className), [className]);

  return (
    <span className={contentClassName} />
  );
}

DefaultText.defaultProps = {
  className: null,
  href: '#',
  children: null,
};

export default DefaultText;
