
import { Header } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';
import { selectData, selectMeta } from '../../../index';

import styles from './default.module.scss';


function Table() {
  const data: Array<any> = useSelector(selectData);
  const meta: any = useSelector(selectMeta);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Найдено { meta['totalRows'] } { nounDeclension(meta['totalRows'], ['товар', 'товара', 'товаров']) }</Header>
      </div>
      <div className={styles['content']}>
        {data.map((item: any) => (
          <div key={item['uuid']} className={styles['item']}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Table);