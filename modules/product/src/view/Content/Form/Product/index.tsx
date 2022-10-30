
import { StoreField } from '@widget/store';

import React from 'react';
import { useSelector } from 'react-redux';
import { getFormSyncErrors } from 'redux-form';

import cn from 'classnames';
import styles from './default.module.scss';


function Product() {
  const errors: any = useSelector(getFormSyncErrors('modify')) || {};
  const contentClassName = React.useMemo(() => cn(styles['content'], {
    [styles['error']]: typeof errors['products'] === 'string',
  }), [errors]);

  return (
    <div className={styles['wrapper']}>
      <div className={contentClassName}>
        <StoreField name={'productUuid'} />
      </div>
    </div>
  );
}

export default Product;
