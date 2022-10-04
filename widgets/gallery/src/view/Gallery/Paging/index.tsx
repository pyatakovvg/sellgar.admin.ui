
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  page: number;
  totalRows: number;
  onChange(page: number): void;
}


function Paging({ page, totalRows, onChange }: IProps) {
  const pages = new Array(Math.ceil(totalRows / 16)).fill(null);

  function handleChange(index: number) {
    onChange(index);
  }

  return (
    <div className={styles['wrapper']}>
      {pages.map((x, index) => {
        return (
          <p key={index} className={cn(styles['link'], { [styles['is-active']]: (page === index) })} onClick={() => handleChange(index)}>{ index + 1 }</p>
        );
      })}
    </div>
  );
}

export default React.memo(Paging);
