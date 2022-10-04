
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  group: any;
  category: any;
  brand: any;
}


function Label({ label, children }: any) {
  return (
    <div className={styles['row']}>
      <div className={styles['label']}>
        <Text>{ label }</Text>
      </div>
      <div className={styles['content']}>
        <Text type={'strong'}>{ children }</Text>
      </div>
    </div>
  );
}

function Item({ group, category, brand }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <Label label={'Группа:'}>{ group?.['name'] ?? '---' }</Label>
      <Label label={'Категория:'}>{ category?.['name'] ?? '---' }</Label>
      <Label label={'Производитель:'}>{ brand?.['name'] ?? '---' }</Label>
    </div>
  );
}

export default Item;