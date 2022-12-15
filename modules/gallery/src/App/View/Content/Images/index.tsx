
import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

import { selectData } from '../../../store/slice';

import styles from './default.module.scss';


function Images() {
  const data = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      {data.images.map((item: any) => (
        <div key={item['uuid']} className={styles['item']}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
}

export default Images;