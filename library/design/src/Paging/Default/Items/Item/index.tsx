
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  children: any;
  isActive: boolean;
  onClick(): void;
}


function Item({ children, isActive, onClick }: IProps) {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={wrapperClassName} onClick={onClick}>
      { children }
    </div>
  );
}

Item.defaultProps = {
  page: 1,
};

export default Item;
