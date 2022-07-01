
import numeral from '@package/numeral';
import { Text, Image } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Item({ imageUuid, vendor, value, title, price, currency }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['vendor']}>
        <Text type={'description'}>{ vendor }</Text>
      </div>
      <div className={styles['image']}>
        <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + imageUuid + '?size=small'} />
      </div>
      <div className={styles['title']}>
        <Text>{ title }</Text>
      </div>
      <div className={styles['mode']}>
        <Text type={'description'}>{ value }</Text>
      </div>
      <div className={styles['price']}>
        <Text type={'strong'}>{ numeral(price).format() } { currency['displayName'] }</Text>
      </div>
    </div>
  );
}

export default Item;