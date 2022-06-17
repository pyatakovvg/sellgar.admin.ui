
import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


interface IProps {
  items: Array<any>;
}


function Menu({ items }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['menu']}>
        {items.map((item: any, index: number) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
