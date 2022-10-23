
import React from 'react';
import { change, getFormValues } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';
import { selectData } from '../../../../../store/slice';

import styles from "./@media/index.module.scss";


function Simple() {
  const dispatch = useDispatch();

  const data = useSelector(selectData) as Array<any>;
  const value = useSelector(getFormValues('store')) as any;

  function handleSelect(uuid: string) {
    dispatch(change('store', 'products', uuid));
  }

  return (
    <div className={styles['wrapper']}>
      {data.map((item) => {
        return (
          <div key={item['uuid']} className={styles['item']}>
            <Item isSelected={ !!~ (value['products'] || []).indexOf(item['uuid']) } {...item} onChange={handleSelect} />
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Simple);
