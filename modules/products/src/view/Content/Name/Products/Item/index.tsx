
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  product: {
    price: number;
    currency: any;
  };
  isTarget: boolean;
}

function Products({ product, isTarget }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-tag', {
    [styles['target']]: isTarget,
  }), [isTarget]);

  return (
    <div className={styles['wrapper']}>
      <span className={iconClassName} />
      <div className={styles['price']}>
        <Text type={'description'}>{ numeral(product['price']).format() } { product?.['currency']?.['displayName'] ?? '---' }</Text>
      </div>
    </div>
  );
}

export default Products;