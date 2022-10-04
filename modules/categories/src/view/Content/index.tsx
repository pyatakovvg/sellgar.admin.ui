
import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';
import { selectData } from '../../store/slice';

import styles from './@media/index.module.scss';


function Content() {
  const data = useSelector(selectData);

  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        {data.map((item: any) => (
          <div key={item['uuid']} className={styles['item']}>
            <Item {...item} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Content;