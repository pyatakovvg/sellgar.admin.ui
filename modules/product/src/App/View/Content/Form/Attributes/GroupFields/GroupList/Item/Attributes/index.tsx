
import { Button } from '@library/kit';

import React from 'react';

import AttributeList from './AttributeList';

import styles from './default.module.scss';


function AttributesValues({ fields, disabled }: any) {
  function handleAddAttr() {
    fields.push({});
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <AttributeList
          disabled={disabled}
          fields={fields}
        />
      </div>
      <div className={styles['controls']}>
        <Button
          mode={'primary'}
          form={'outline'}
          disabled={disabled}
          onClick={handleAddAttr}
        >Добавить характеристику</Button>
      </div>
    </div>
  );
}

export default AttributesValues;
