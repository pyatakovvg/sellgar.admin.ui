
import { openDialog } from "@package/dialog";
import { Button, Text } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './@media/index.module.scss';


function Empty() {
  const dispatch = useDispatch();

  function handleAddImages() {
    dispatch<any>(openDialog('gallery'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Text type={'strong'}>Нет групп свойств товара</Text>
      </div>
    </div>
  );
}

export default React.memo(Empty);
