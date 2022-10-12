
import { Text } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

import { selectData } from '../../store/slice';

import styles from './default.module.scss';


function Content() {
  const data: Array<any> = useSelector(selectData);

  if ( ! data.length) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Нет данных для отображение</Text>
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      {data.map((item: any) => (
        <div key={item['uuid']} className={styles['item']}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
}

export default Content;