
import { Header } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


function Products({ products }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Товары</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['container']}>
          {products.map((item) => (
            <div key={item['uuid']} className={styles['item']}>
              <Item {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;