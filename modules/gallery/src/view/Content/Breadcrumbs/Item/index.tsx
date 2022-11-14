
import { Link } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Item({ uuid, name }: any) {
  return (
    <div className={styles['wrapper']}>
      <Link href={process.env['PUBLIC_URL'] + '/gallery/' + uuid}>{ name }</Link>
    </div>
  );
}

export default Item;