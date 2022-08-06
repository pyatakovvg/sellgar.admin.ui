
import { Text } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

import { selectData } from '../../index';

import styles from './default.module.scss';


function Groups(): JSX.Element {
  const data: Array<any> = useSelector(selectData);

  if ( ! data.length) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Нет данных для отображение</Text>
      </div>
    );
  }

  return (
    <div>
      {data.map((item: any): JSX.Element => (
        <div key={item['code']} className={styles['item']}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
}

export default Groups;