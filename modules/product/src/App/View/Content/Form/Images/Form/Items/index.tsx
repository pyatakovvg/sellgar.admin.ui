
import { Text, Draggable, arrayMoveImmutable } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


function AddImageForm({ items, onChange }: any) {
  function handleOrderChange(from: number, to: number) {
    onChange(arrayMoveImmutable(items, from, to));
  }

  function handleDelete(image: any) {
    onChange(items.filter((item: any) => item['uuid'] !== image['uuid']));
  }

  if ( ! items.length) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Нет изображений</Text>
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Draggable type={'grid'} onChange={handleOrderChange}>
          {items.map((image: any) => {
            return (
              <Item key={image['uuid']} {...image} onDelete={() => handleDelete(image)} />
            );
          })}
        </Draggable>
      </div>
    </div>
  );
}

export default AddImageForm;
