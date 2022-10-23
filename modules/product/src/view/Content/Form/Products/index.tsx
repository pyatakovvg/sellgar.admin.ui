
import React from 'react';
import { useSelector } from 'react-redux';
import { FieldArray, getFormSyncErrors } from 'redux-form';

import GroupFields from "./GroupFields";

import { selectInProcess } from '../../../../store/slice';

import cn from 'classnames';
import styles from './default.module.scss';


function Products() {
  const inProcess = useSelector(selectInProcess);
  const errors: any = useSelector(getFormSyncErrors('modify')) || {};
  const contentClassName = React.useMemo(() => cn(styles['content'], {
    [styles['error']]: typeof errors['products'] === 'string',
  }), [errors]);

  return (
    <div className={styles['block']}>
      <div className={contentClassName}>
        <FieldArray
          name="products"
          validate={[(value) => ! value]}
          // @ts-ignore
          component={GroupFields}
          disabled={inProcess}
        />
      </div>
    </div>
  );
}

export default Products;
