
import numeral from '@package/numeral';
import { Text, Image } from '@library/kit';

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './default.module.scss';


function Item({ productUuid, imageUuid, vendor, value, title, count, price, currency }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['vendor']}>
        <Text type={'description'}>{ vendor }</Text>
      </div>
      <div className={styles['image']}>
        <Image width={124} height={124} src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + imageUuid + '?weight=124'} />
      </div>
      <div className={styles['title']}>
        <Link to={process.env['PUBLIC_URL'] + '/products/' + productUuid}>
          <Text>{ title }</Text>
        </Link>
      </div>
      <div className={styles['mode']}>
        <Text type={'description'}>{ value }</Text>
      </div>
      <div className={styles['price']}>
        <Text type={'strong'}>{ count } x { numeral(price).format() } { currency['displayName'] }</Text>
      </div>
    </div>
  );
}

export default Item;