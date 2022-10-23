
import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


interface IProps {
  items: Array<any>;
}

function Products({ items }: IProps) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item) => {
        return (
          <div key={item['uuid']} className={styles['item']}>
            <Item {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default Products;