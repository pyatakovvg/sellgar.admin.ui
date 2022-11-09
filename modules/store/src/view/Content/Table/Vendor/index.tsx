
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  vendor?: string;
  barcode?: string;
}


function Vendor({ vendor, barcode }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text type={'strong'}>А: { vendor || 'Не задан'}</Text>
      </div>
      <div className={styles['line']}>
        <Text type={'description'}>Ш: { barcode || 'Не задан'}</Text>
      </div>
    </div>
  );
}

export default Vendor;