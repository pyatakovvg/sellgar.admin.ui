
import React from 'react';
import { change, getFormValues } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';
import { selectData } from '../../../../../store/slice';

import styles from "./@media/index.module.scss";


function Simple() {
  const dispatch = useDispatch();

  const data = useSelector(selectData) as Array<any>;
  const value = useSelector(getFormValues('gallery')) as any;

  function handleSelect(image: any) {
    dispatch(change('gallery', 'images', image));
  }

  return (
    <div className={styles['wrapper']}>
      {data.map((item) => (
        <div key={item['uuid']} className={styles['image']}>
          <Item isSelected={item['uuid'] === value?.['images']?.['uuid']} {...item} onChange={handleSelect} />
        </div>
      ))}
    </div>
  )
}

export default React.memo(Simple);
