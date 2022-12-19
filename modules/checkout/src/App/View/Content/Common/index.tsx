
import { Metric } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function Information({ uuid, status }: any) {
  const statusClassName = React.useMemo(() => cn({
    [styles['gray-light']]: status?.['code'] === 'bucket',
    [styles['danger']]: status?.['code'] === 'new',
    [styles['primary']]: status?.['code'] === 'finished',
    [styles['success']]: status?.['code'] === 'payed',
  }), [status]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Metric label={'Номер заказа'}>{ uuid }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'Статус'}>
              <span className={statusClassName}>{ status?.['displayName'] }</span>
            </Metric>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;