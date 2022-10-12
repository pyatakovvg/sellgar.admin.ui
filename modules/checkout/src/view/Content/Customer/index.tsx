
import moment from '@package/moment';
import { Header, Metric } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Customer({ phone, email, createdAt }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Покупатель</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Metric label={'Телефон'}>{ phone ?? '---' }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'E-Mail'}>{ email ?? '---' }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'Создан'}>{ moment(createdAt).format('DD.MM.YYYY в HH:mm') }</Metric>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;