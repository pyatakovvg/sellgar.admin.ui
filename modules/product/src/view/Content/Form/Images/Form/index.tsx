
import { Button } from '@library/kit';
import { openGallery } from '@widget/gallery';

import React from 'react';
import { useDispatch } from 'react-redux';

import Items from './Items';

import styles from './default.module.scss';


function AddImageForm({ input }: any) {
  const dispatch = useDispatch();

  function handleAddImages() {
    dispatch<any>(openGallery('gallery'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Items items={input['value']} onChange={input.onChange} />
      </div>
      <div className={styles['controls']}>
        <Button form={'outline'} onClick={() => handleAddImages()}>Редактировать</Button>
      </div>
    </div>
  );
}

export default AddImageForm;
