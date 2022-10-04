
import React from 'react';
import { change, getFormValues } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';
import { selectData } from '../../../../../store/slice';

import styles from "./@media/index.module.scss";


function Multiple() {
  const dispatch = useDispatch();

  const data = useSelector(selectData) as Array<any>;
  const value = useSelector(getFormValues('gallery')) as any;

  function handleSelect(image: any) {
    if (value['images'].some((item: any) => item['uuid'] === image['uuid'])) {
      const images = value['images'].filter((item: any) => item['uuid'] !== image['uuid']);
      dispatch(change('gallery', 'images', images));
    }
    else {
      dispatch(change('gallery', 'images', [...value['images'], image]));
    }
  }

  return (
    <div className={styles['wrapper']}>
      {data.map((item) => (
        <div key={item['uuid']} className={styles['image']}>
          <Item isSelected={value['images'].some((img: any) => item['uuid'] === img['uuid'])} {...item} onChange={handleSelect} />
        </div>
      ))}
    </div>
  )
}

export default React.memo(Multiple);
