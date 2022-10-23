
import { Button } from '@library/kit';
import Store, { openStore, closeStore } from '@widget/store';

import React from 'react';
import { useDispatch } from 'react-redux';

import GroupList from './GroupList';

import styles from './default.module.scss';


function ProductsListField({ fields, disabled }: any) {
  const dispatch = useDispatch();
  const value = fields.getAll();

  function handleAddAttr() {
    dispatch(openStore('store'));
  }

  function handleChange(data: Array<string>) {
    fields.removeAll();
    data.forEach((uuid: string) => {
      fields.push({
        productUuid: uuid,
      });
    });
    dispatch(closeStore());
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <GroupList disabled={disabled} fields={fields} />
      </div>
      <div className={styles['controls']}>
        <Button
          mode={'primary'}
          form={'outline'}
          disabled={disabled}
          onClick={() => handleAddAttr()}
        >Прикрепить товар</Button>
      </div>

      <Store type={'multiple'} name={'store'} value={value.map((item: any) => item['productUuid'])} onSubmit={handleChange} />

    </div>
  );
}

export default ProductsListField;
