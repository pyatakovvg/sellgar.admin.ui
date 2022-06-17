
import { Text, Draggable } from '@library/kit';

import React from 'react';

import Item from './Item';
import Header from './Header';

import styles from './default.module.scss';


function OptionsList({ fields, disabled }: any) {
  function handleRemoveAttr(index: number) {
    fields.remove(index)
  }

  function handleChangeOrder(from: number, to: number) {
    if (from !== null && to !== null) {
      fields.move(from, to);
    }
  }

  if ( ! fields.length) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Добавте свойство</Text>
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <Draggable
          type={'list'}
          // @ts-ignore
          onChange={(from: number, to: number) => handleChangeOrder(from, to)}
        >
          {fields.map((field: any, index: number) => {
            return (
              <Item
                key={index}
                data={fields.get(index)}
                field={field}
                disabled={disabled}
                onRemove={() => handleRemoveAttr(index)}
              />
            )
          })}
        </Draggable>
      </div>
    </div>
  );
}

export default OptionsList;
