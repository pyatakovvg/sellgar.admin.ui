
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  title?: any;
  vendor?: string;
  barcode?: string;
}


function Label({ label, children }: any) {
  return (
    <div className={styles['row']}>
      {label && (
        <div className={styles['label']}>
          <Text>{ label }</Text>
        </div>
      )}
      <div className={styles['content']}>
        <Text type={'strong'}>{ children }</Text>
      </div>
    </div>
  );
}

function Item({ title, vendor, barcode }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <Label>{ title ?? '---' }</Label>
      {vendor && <Label label={'Артикул:'}>{ vendor }</Label>}
      {barcode && <Label label={'Штрихкод:'}>{ barcode }</Label>}
    </div>
  );
}

export default Item;