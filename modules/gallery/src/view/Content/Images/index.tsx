
import { Text } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

import { selectData } from '../../../store/slice';

import styles from './default.module.scss';


function Images() {
  const data: Array<any> = useSelector(selectData);

  if ( ! data.length) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Нет изображений</Text>
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {data.map((item: any): JSX.Element => (
          <div key={item['uuid']} className={styles['item']}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;