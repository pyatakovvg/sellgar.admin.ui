
import { UUID } from '@helper/utils';
import { Button } from '@library/kit';

import React from 'react';

import ModeList from './ModeList';

import styles from './default.module.scss';


function ModesField({ fields, disabled }: any) {
  function handleAddAttr() {
    let isTarget = false;
    if ( ! fields.length) {
      isTarget = true;
    }
    fields.push({ uuid: UUID(), isUse: true, isTarget, currencyCode: 'RUB' });
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <ModeList disabled={disabled} fields={fields} />
      </div>
      <div className={styles['controls']}>
        <Button
          mode={'primary'}
          disabled={disabled}
          onClick={() => handleAddAttr()}
        >Добавить свойство</Button>
      </div>
    </div>
  );
}

export default ModesField;
