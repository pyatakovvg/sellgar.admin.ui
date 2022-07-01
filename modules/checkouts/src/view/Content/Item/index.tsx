
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  gallery: Array<any>;
  group: any;
  category: any;
  brand: any;
  modes: Array<any>;
  isUse: boolean;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}


function Item({ uuid, status, delivery, payment, products, price, currency }: any): JSX.Element {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);
  const statusClassName = React.useMemo(() => cn({
    [styles['gray-light']]: status['code'] === 'bucket',
    [styles['danger']]: status['code'] === 'new',
    [styles['primary']]: status['code'] === 'finished',
    [styles['success']]: status['code'] === 'payed',
  }), [status]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['status']}>
          <Text className={statusClassName}>{ status['displayName'] }</Text>
        </div>
        <div className={styles['products']}>
          <Text type={'strong'}>{ products.length } товар</Text>
        </div>
        <div className={styles['delivery']}>
          <Text>{ delivery?.['displayName'] ?? '---' }</Text>
        </div>
        <div className={styles['payment']}>
          <Text>{ payment?.['displayName'] ?? '---' }</Text>
        </div>
        <div className={styles['price']}>
          <Text type={'strong'}>{ numeral(price).format() } { currency?.['displayName'] ?? '---' }</Text>
        </div>
      </div>
      <div className={styles['control']}>
        <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/checkouts/' + uuid} />
      </div>
    </div>
  );
}

export default Item;