
import { Text, Checkbox } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  uuid: string;
  isSelected: boolean;
  onChange(data: string): void;
}


function Item({ uuid, name, price, currency, isSelected, onChange }: IProps) {
  return (
    <div className={styles['wrapper']} onClick={() => onChange(uuid)}>
      <div className={styles['control']}>
        <Checkbox value={isSelected} onChange={() => {}} />
      </div>
      <div className={styles['content']}>
        <div className={styles['name']}>
          <Text>{ name }</Text>
        </div>
        <div className={styles['price']}>
          <Text>{ price } { currency?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Item);
