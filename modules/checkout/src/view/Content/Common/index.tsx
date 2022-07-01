
import numeral from '@package/numeral';
import { Header, Metric } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Information({ uuid, status }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Информация</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Metric label={'Номер заказа'}>{ uuid }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'Статус'}>{ status['displayName'] }</Metric>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;