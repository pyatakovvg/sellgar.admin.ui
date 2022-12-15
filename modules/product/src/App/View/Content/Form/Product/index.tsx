
import { StoreField } from '@widget/store';

import React from 'react';

import styles from './default.module.scss';


function Product() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <StoreField name={'productUuid'} />
      </div>
    </div>
  );
}

export default Product;
