
import numeral from '@package/numeral';
import { Header, Metric } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Information({ delivery, payment, price, currency, customer }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Информация</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Metric label={'Способ доставки'}>{ delivery?.['displayName'] ?? '---' }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'Способ оплаты'}>{ payment?.['displayName'] ?? '---' }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'Сумма к оплате'}>{ numeral(price).format() } { currency?.['displayName'] }</Metric>
          </div>
        </div>
        {customer?.['address'] && (
          <div className={styles['row']}>
            <div className={styles['col']}>
              <Metric label={'Адрес'}>{ customer?.['address']?.['value'] ?? '---' }</Metric>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Information;