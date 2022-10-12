
import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


interface IProps {
  page: number;
  pages: Array<number>;
  onChange(page: number): void;
}


function Items({ page, pages, onChange }: IProps) {
  function handleClick(page: number) {
    onChange(page);
  }

  return (
    <div className={styles['wrapper']}>
      {pages.map((index) => {
        return (
          <div key={index} className={styles['item']}>
            <Item onClick={() => handleClick(index + 1)} isActive={index === page - 1}>{ index + 1 }</Item>
          </div>
        );
      })}
    </div>
  );
}

Items.defaultProps = {
  page: 1,
  pages: 0,
};

export default Items;
