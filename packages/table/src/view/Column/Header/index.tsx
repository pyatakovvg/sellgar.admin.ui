
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  title: string | null;
  width: number | 'auto';
  align: 'left' | 'right' | 'center';
}


function Header({ title, align }: IProps) {
  const className = React.useMemo(() => cn(styles['content'], {
    [styles['left']]: align === 'left',
    [styles['right']]: align === 'right',
    [styles['center']]: align === 'center',
  }), [align]);

  return (
    <div className={styles['column']}>
      {title && (
        <div className={className}>
          { title }
        </div>
      )}
    </div>
  );
}

export default Header;
