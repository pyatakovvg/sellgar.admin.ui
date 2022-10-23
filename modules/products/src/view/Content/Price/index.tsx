
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  products?: Array<any>;
}


function Item({ products }: IProps) {
  const product = React.useMemo(() => (products || []).find((item) => item['isTarget'])?.['product'] ?? {}, [products]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <div className={styles['price']}>
          <Text type={'strong'}>{ product['price'] ? numeral(product['price']).format()  : '---'}</Text>
        </div>
        <div className={styles['currency']}>
          <Text type={'strong'}>{ product['currency']?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
      <div className={styles['field']}>
        <div className={styles['price']}>
          <Text type={'description'}>{ product['purchasePrice'] ? numeral(product['purchasePrice']).format() : '---' }</Text>
        </div>
        <div className={styles['currency']}>
          <Text type={'description'}>{ product['currency']?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
    </div>
  );
}

export default Item;
