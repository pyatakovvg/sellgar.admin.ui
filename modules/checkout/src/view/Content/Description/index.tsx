
import { Header, Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Information({ description }: any): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Дополнительно</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Text type={'description'}>{ description['value'] }</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;