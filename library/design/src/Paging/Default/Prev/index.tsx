
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  page: number;
  onChange(page: number): void;
}


function Prev({ page, onChange }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-chevron-left'), []);

  function handleChange() {
    const newPage = page - 1;
    if (newPage < 1) {
      return void 0;
    }
    onChange(newPage);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={iconClassName} onClick={handleChange} />
    </div>
  );
}

Prev.defaultProps = {
  page: 1,
};

export default Prev;
