
import { Button, Text } from '@library/kit';
import { openGallery } from "@widget/gallery";

import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './@media/index.module.scss';


function Empty() {
  const dispatch = useDispatch();

  function handleAddImages() {
    dispatch<any>(openGallery('gallery'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Text type={'strong'}>Нет выбранных изображений</Text>
      </div>
      <div className={styles['control']}>
        <Button form={'outline'} onClick={handleAddImages}>Выбрать из галлереи</Button>
      </div>
    </div>
  );
}

export default React.memo(Empty);
