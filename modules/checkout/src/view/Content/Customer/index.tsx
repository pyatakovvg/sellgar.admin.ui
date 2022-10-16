
import moment from '@package/moment';
import { Header, Metric } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  details: Array<any>;
  createdAt: string;
}


function Customer({ details, createdAt }: IProps) {
  const name = React.useMemo(() => details.find((item) => item['name'] === 'name'), [details]);
  const phone = React.useMemo(() => details.find((item) => item['name'] === 'phone'), [details]);
  const email = React.useMemo(() => details.find((item) => item['name'] === 'email'), [details]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Покупатель</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Metric label={'Имя'}>{ name?.['value'] ?? '---' }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'Телефон'}>{ phone?.['value'] ?? '---' }</Metric>
          </div>
          <div className={styles['col']}>
            <Metric label={'E-Mail'}>{ email?.['value'] ?? '---' }</Metric>
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