
import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


interface IProps {
  items: Array<any>;
}


function Menu({ items }: IProps) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item: any, index: number) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

export default Menu;
