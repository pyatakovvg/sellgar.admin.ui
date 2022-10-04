
import { Button } from '@library/kit';

import React from 'react';

import GroupList from './GroupList';

import styles from './default.module.scss';


function AttributeListField({ fields, disabled }: any) {
  function handleAddAttr() {
    fields.push({
      values: [],
    });
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
        >Добавить группу атрибутов</Button>
      </div>
    </div>
  );
}

export default AttributeListField;
