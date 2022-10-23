
import { Draggable } from '@library/kit';

import React from 'react';
import { change } from 'redux-form';
import { useDispatch } from 'react-redux';

import Item from './Item';
import Empty from './Empty';


function OptionsList({ fields, disabled }: any) {
  const dispatch = useDispatch();

  function handleRemove(index: number) {
    const item = fields.get(index);
    fields.remove(index);
    if (item['isTarget'] && !! fields.length) {
      dispatch(change('modify', 'products[0]' + '.isTarget', true));
    }
  }

  function handleChangeTarget(field: string) {
    fields.forEach((item: string) => {
      dispatch(change('modify', item + '.isTarget', false));
    });
    dispatch(change('modify', field + '.isTarget', true));
  }

  function handleChangeOrder(from: number, to: number) {
    if (from !== null && to !== null) {
      fields.move(from, to);
    }
  }

  if ( ! fields.length) {
    return (
      <Empty />
    );
  }

  return (
    <Draggable
      type={'list'}
      // @ts-ignore
      onChange={(from: number, to: number) => handleChangeOrder(from, to)}
    >
      {fields.map((field: any, index: number) => {
        const data = fields.get(index);
        return (
          <Item
            key={data['productUuid']}
            data={data}
            field={field}
            disabled={disabled}
            onRemove={() => handleRemove(index)}
            onChange={() => handleChangeTarget(field)}
          />
        )
      })}
    </Draggable>
  );
}

export default React.memo(OptionsList);
